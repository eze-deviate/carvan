"use client";
import { Button } from "@/components/ui/button";
import { useBookReaderStore } from "@/stores/book-reader";
import {
  ArrowLeftIcon,
  DotsHorizontalIcon,
  MinusIcon,
  PlusIcon,
  SizeIcon,
  SlashIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PageNavButton from "./page-nav-button";
import {
  getDocument,
  GlobalWorkerOptions,
  PageViewport,
  PDFDocumentProxy,
  PDFPageProxy,
  RenderTask,
} from "pdfjs-dist";
import SearchIcon from "@public/assets/svgs/reader-search.svg";
import BookmarkIcon from "@public/assets/svgs/bookmark.svg";
import HighlighterIcon from "@public/assets/svgs/highlighter.svg";
import EraserIcon from "@public/assets/svgs/eraser.svg";
import PDFSearchInput from "./pdf-search-input";
import "pdfjs-dist/web/pdf_viewer.css";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import ReaderPopOver from "./reader-options-popover";
import PageViewPopover from "./page-view-popover";

type Props = {};

GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
// GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js';
const PDFReaderDist = (props: Props) => {
  const { book } = useBookReaderStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const highlightCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentRenderTaskRef = useRef<RenderTask | null>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  // const [pdf, setPdf] = useState<any>(null);
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  // const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  // const [page, setPage] = useState<PDFPageProxy | null>(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [highlights, setHighlights] = useState<any[]>([]);
  const [selectedText, setSelectedText] = useState("");
  const [isHighlighting, setIsHighlighting] = useState(false);
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [scale, setScale] = useState(1);
  const [pageView, setPageView] = useState<"single" | "double">("single");
  // Load the PDF document
  useEffect(() => {
    const loadPdf = async () => {
      const response = await fetch(book.url);
      // Check if the response is ok (status 200) and has content
      if (!response.ok || response.status === 204) {
        throw new Error(
          `Failed to load PDF: ${response.status} ${response.statusText}`
        );
      }

      const blob = await response.blob();
      if (blob.size === 0) {
        throw new Error("PDF file is empty");
      }
      const pdf = await getDocument(URL.createObjectURL(blob)).promise;
      // const loadingTask = getDocument(book.url);
      // const pdf = await loadingTask.promise;
      setPdfDocument(pdf);
      setPageNumber(1); // Start at page 1
    };

    loadPdf();

    // Cleanup on component unmount
    return () => {
      if (currentRenderTaskRef.current) {
        currentRenderTaskRef.current.cancel();
      }
    };
  }, [book.url]);

  // Render the page whenever it changes
  useEffect(() => {
    // if (!page || !canvasRef.current) return;

    const renderPage = async (pageNum: number) => {
      if (!pdfDocument || !canvasRef.current) return;
      const pagesToRender =
        pageView == "double" ? [pageNum, pageNum + 1] : [pageNum];
      // for(const pageToRender of pagesToRender){
      //   const page =await pdfDocument.getPage(pageNum);
      // }
      const page = await pdfDocument.getPage(pageNum);
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      // const highlightCanvas = highlightCanvasRef.current;
      // const highlightContext = highlightCanvas?.getContext("2d");
      if (!context) return;

      const viewport = page.getViewport({ scale });
      if (canvas && highlightCanvasRef) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
      }

      // Cancel any ongoing render task before starting a new one
      if (currentRenderTaskRef?.current?.cancel) {
        currentRenderTaskRef.current.cancel();
      }

      // Start the rendering task
      currentRenderTaskRef.current = page.render({
        canvasContext: context,
        viewport: viewport,
      });

      // Handle completion and errors
      try {
        await currentRenderTaskRef.current.promise;
        const textContent = await page.getTextContent();

        const textLayerDiv = textLayerRef.current;
        textLayerDiv!.innerHTML = "";

        const textLayer = {
          textContent,
          container: textLayerDiv,
          viewport,
          textDivs: [],
          textContentSource: null,
          // textContentStream: null,
        };

        pdfjsLib
          .renderTextLayer(textLayer)
          .promise.then(() => console.log("rendered textlayer"));

        //render highlights
        highlights.forEach((highlight) => {
          if (highlight.page === pageNum) {
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.backgroundColor = "yellow";
            div.style.opacity = "0.5";
            div.style.left = `${highlight.left}px`;
            div.style.top = `${highlight.top}px`;
            div.style.width = `${highlight.width}px`;
            div.style.height = `${highlight.height}px`;
            textLayerDiv?.appendChild(div);
          }
        });
      } catch (err) {}
    };

    renderPage(pageNumber);

    // Cleanup render task on page change
    return () => {
      if (currentRenderTaskRef?.current) {
        currentRenderTaskRef.current.cancel();
      }
    };
  }, [pageNumber, searchResults, pdfDocument, scale, pageView]);

  const toggleFullscreen = () => {
    const container = document.getElementById("pdf-container");
    if (!isFullscreen) {
      if (container?.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any)?.mozRequestFullScreen) {
        // Firefox
        (container as any).mozRequestFullScreen();
      } else if ((container as any)?.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        (container as any).webkitRequestFullscreen();
      } else if ((container as any)?.msRequestFullscreen) {
        // IE/Edge
        (container as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any)?.mozCancelFullScreen) {
        // Firefox
        (document as any).mozCancelFullScreen();
      } else if ((document as any)?.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        (document as any).webkitExitFullscreen();
      } else if ((document as any)?.msExitFullscreen) {
        // IE/Edge
        (document as any).msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handlePrevPage = () => {
    if (pageNumber < pdfDocument!.numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };
  const handleNextPage = () => {
    if (pageNumber < pdfDocument!.numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const handleSearch = async () => {
    if (!pdfDocument) return;

    const results: { page: number; rects: DOMRect[] }[] = [];
    for (let i = 1; i <= pdfDocument.numPages; i++) {
      const page = await pdfDocument.getPage(i);
      const textContent = await page.getTextContent();
      const viewport = page.getViewport({ scale: scale });

      const matches: DOMRect[] = [];
      textContent.items.forEach((item: any) => {
        if (item.str.toLowerCase().includes(searchTerm.toLowerCase())) {
          // const [x, y] = viewport.convertToViewportPoint(
          //   item.transform[4],
          //   item.transform[5]
          // );
          // const rect = {
          //   x,
          //   y: viewport.height - y,
          //   width: item.width,
          //   height: item.height,
          // } as DOMRect;
          // matches.push(rect);

          const transform = item.transform;
          const x = transform[4];
          const y = transform[5];
          const width = item.width;
          const height = Math.abs(transform[3]);

          // Convert to viewport coordinates
          const [x0, y0] = viewport.convertToViewportPoint(x, y);
          const [x1, y1] = viewport.convertToViewportPoint(
            x + width,
            y - height
          );

          // Construct DOMRect
          const rect = {
            x: x0,
            y: viewport.height - y0, // Adjust for canvas origin
            width: x1 - x0,
            height: y0 - y1,
          } as DOMRect;

          matches.push(rect);
        }
      });

      if (matches.length > 0) {
        results.push({ page: i, rects: matches });
      }
    }

    setSearchResults(results);
    setPageNumber(results.length > 0 ? results[0].page : 1);
    setCurrentMatchIndex(0);
  };

  const renderTextLayer = (textContent: any, viewport: PageViewport) => {
    const textLayerDiv = textLayerRef.current;
    textLayerDiv!.innerHTML = ""; // Clear existing text layer

    textContent.items.forEach((item) => {
      const textDiv = document.createElement("div");
      const { transform, width, height, str } = item;

      // Apply the text transform (to position the text correctly)
      const [scaleX, skewX, skewY, scaleY, offsetX, offsetY] = transform;
      const transformStyle = `matrix(${scaleX}, ${skewY}, ${skewX}, ${scaleY}, ${offsetX}, ${offsetY})`;

      textDiv.textContent = str;
      textDiv.style.position = "absolute";
      textDiv.style.transform = transformStyle;
      textDiv.style.transformOrigin = "0 0";
      textDiv.style.width = `${width}px`;
      textDiv.style.height = `${height}px`;

      textLayerDiv!.appendChild(textDiv);
    });

    // Apply search highlights
    // highlightSearch();
  };
  const handleTextHighlight = async (pageNumber: number) => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const textRange = selection.getRangeAt(0);
    const selectedText = selection.toString();

    const rects = Array.from(textRange.getClientRects()).map((rect) => ({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      page: pageNumber,
    }));

    const newHighlight = { text: selectedText, rects, page: pageNumber };
    setHighlights((prev) => [...prev, newHighlight]);

    // Clear selection
    selection.removeAllRanges();
  };

  const handleTextLayerClick = (event: React.MouseEvent) => {
    if (isHighlighting) {
      const textLayerDiv = textLayerRef.current;
      const rect = textLayerDiv?.getBoundingClientRect();
      const left = event.clientX - rect!.left;
      const top = event.clientY - rect!.top;
    }
  };

  // Start highlighting (mouse down)
  const startHighlight = (event: any) => {
    const textDiv = textLayerRef.current;
    const range = document.createRange();
    range.setStart(textDiv?.firstChild, 0);

    window!.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
  };

  // End highlighting (mouse up)
  const endHighlight = (event: any) => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    console.log("selection rectangle", rect);
    // Save the highlight
    setHighlights((prev) => [
      ...prev,
      {
        text: selection.toString(),
        page: pageNumber,
        rect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        },
        scale,
      },
    ]);

    selection.removeAllRanges();
  };
  const zoomIn = () => setScale((prev) => prev + 0.2);
  const zoomOut = () => setScale((prev) => prev - 0.2);
  return (
    <div className="relative" id="pdf-container">
      {/* header */}
      <div className="flex flex-col h-screen justify-between">
        <div className="bg-[#1E1E1FF0] py-4 px-6 flex items-center h-fit justify-between w-full">
          <div className="flex gap-x-6 items-center">
            <ArrowLeftIcon className="" stroke="#fff" />
            <Image
              className="w-8 h-8"
              src={"/assets/images/book-image.webp"}
              alt="book cover"
              height={100}
              width={100}
            />
            <h4 className="text-white font-medium  text-sm">
              Stress Relief: Adult coloring Book
            </h4>
          </div>
          <div className="flex gap-x-3">
            <SizeIcon
              className="text-white cursor-pointer"
              onClick={toggleFullscreen}
            />
            {/* <DotsHorizontalIcon className="text-white cursor-pointer" /> */}
            <ReaderPopOver />
          </div>
        </div>
        <div className="bg-[#1E1E1FF0] flex flex-col flex-1">
          {/* pdf-viewer container */}
          <div className="flex w-full justify-center">
            <div className=" bg-white relative">
              <canvas ref={canvasRef} className="border"></canvas>
              {/* <canvas
                ref={highlightCanvasRef}
                // style={{ position: "absolute", top: 0, left: 0 }}
                className="absolute top-0 left-0"
              /> */}
              <div
                ref={textLayerRef}
                className={cn("textLayer", {
                  // "cursor-highlight": isHighlightMode,
                })}
                onMouseDown={(e) => {
                  if (isHighlightMode) {
                    startHighlight(e);
                  }
                }}
                onMouseUp={(e) => {
                  if (isHighlightMode) {
                    endHighlight(e);
                  }
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* toolbar */}
        <div className="bg-white flex justify-between items-center px-4 py-3 text-gray-300">
          <div className="flex items-center gap-x-2">
            <SearchIcon
              onClick={() => setShowSearchInput(true)}
              className="cursor-pointer"
            />
            <BookmarkIcon />
            <div className="border-r border-gray-200"></div>
            <HighlighterIcon
              onClick={() => {
                setIsHighlightMode(!isHighlightMode);
              }}
            />
            <EraserIcon />
          </div>
          <div className="flex gapx-x-4 text-gray-900 items-center">
            <MinusIcon
              stroke="#000"
              className="p-2 h-6 w-6 cursor-pointer"
              onClick={zoomOut}
            />
            <PlusIcon
              stroke="#000"
              className="p-2 h-6 w-6 cursor-pointer"
              onClick={zoomIn}
            />

            <div className="border-r border-gray-200"></div>
            <div className="flex text-gray-800 items-center">
              <Input
                value={pageNumber}
                onChange={(e) => {}}
                // onKeyDown={(e) => {}}
                className="w-10"
              />
              <SlashIcon />
              <span>{pdfDocument?.numPages}</span>
            </div>

            <div className="border-r border-gray-200"></div>
            <PageViewPopover pageView={pageView} setPageView={setPageView} />
          </div>
        </div>
      </div>
      {/* NEXT AND PREV BUTTONS */}
      <div>
        <PageNavButton direction="left" onClick={handlePrevPage} />
        <PageNavButton direction="right" onClick={handleNextPage} />
      </div>
      {showSearchInput && (
        <PDFSearchInput
          setShowSearchInput={setShowSearchInput}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleInputChange={handleSearch}
        />
      )}
      {/* <PdfReader fileUrl="/assets/pdf/python-basics-sample-chapters.pdf" /> */}
    </div>
  );
};

export default PDFReaderDist;
