"use client";
import { Button } from "@/components/ui/button";
import { useBookReaderStore } from "@/stores/book-reader";
import {
  ArrowLeftIcon,
  DotsHorizontalIcon,
  SizeIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PageNavButton from "./page-nav-button";
import {
  getDocument,
  GlobalWorkerOptions,
  PDFDocumentProxy,
  PDFPageProxy,
  RenderTask,
} from "pdfjs-dist";
import SearchIcon from "@public/assets/svgs/reader-search.svg";
import BookmarkIcon from "@public/assets/svgs/bookmark.svg";
import HighlighterIcon from "@public/assets/svgs/highlighter.svg";
import EraserIcon from "@public/assets/svgs/eraser.svg";

type Props = {};
GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
// GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js';
const PDFReaderDist = (props: Props) => {
  const { book } = useBookReaderStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const highlightCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentRenderTaskRef = useRef<RenderTask | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pdf, setPdf] = useState<any>(null);
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [page, setPage] = useState<PDFPageProxy | null>(null);
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

  //use effect for page number changes

  useEffect(() => {
    if (!pdfDocument || pageNumber < 1 || pageNumber > pdfDocument.numPages)
      return;

    const fetchPage = async () => {
      const newPage = await pdfDocument.getPage(pageNumber);
      setPage(newPage);
    };

    fetchPage();

    // Cleanup on page number change
    return () => {
      if (currentRenderTaskRef?.current) {
        currentRenderTaskRef.current.cancel();
      }
    };
  }, [pdfDocument, pageNumber]);

  // Render the page whenever it changes
  useEffect(() => {
    if (!page || !canvasRef.current) return;

    const renderPage = (page: PDFPageProxy) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      const highlightCanvas = highlightCanvasRef.current;
      const highlightContext = highlightCanvas?.getContext("2d");
      if (!context) return;

      const viewport = page.getViewport({ scale: 0.9 });
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
      currentRenderTaskRef.current.promise
        .then(() => {
          console.log("Page rendered successfully");

          highlightCanvas!.width = viewport.width;
          highlightCanvas!.height = viewport.height;
          highlightContext?.clearRect(
            0,
            0,
            highlightCanvas!.width,
            highlightCanvas!.height
          );
          const resultsForPage = searchResults.find(
            (result) => result.page === pageNumber
          );
          if (resultsForPage) {
            highlightContext!.fillStyle = "rgba(255, 255, 0, 0.5)";
            resultsForPage.rects.forEach((rect) => {
              highlightContext!.fillRect(
                rect.x,
                rect.y,
                rect.width,
                rect.height
              );
            });
          }
        })
        .catch((error) => {
          if (error?.name === "RenderingCancelledException") {
            console.log("Rendering cancelled");
          } else {
            console.error("Rendering error:", error);
          }
        });
    };

    renderPage(page);

    // Cleanup render task on page change
    return () => {
      if (currentRenderTaskRef?.current) {
        currentRenderTaskRef.current.cancel();
      }
    };
  }, [page]);

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
      const viewport = page.getViewport({ scale: 1 });

      const matches: DOMRect[] = [];
      textContent.items.forEach((item: any) => {
        if (item.str.toLowerCase().includes(searchTerm.toLowerCase())) {
          const [x, y] = viewport.convertToViewportPoint(
            item.transform[4],
            item.transform[5]
          );
          const rect = {
            x,
            y: viewport.height - y,
            width: item.width,
            height: item.height,
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
            <DotsHorizontalIcon className="text-white cursor-pointer" />
          </div>
        </div>
        <div className="bg-[#1E1E1FF0] flex flex-col flex-1">
          {/* pdf-viewer container */}
          <div className="flex w-full justify-center">
            <div className=" bg-white relative">
              <canvas ref={canvasRef} className="border"></canvas>
              <canvas
                ref={highlightCanvasRef}
                // style={{ position: "absolute", top: 0, left: 0 }}
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
        {/* toolbar */}
        <div className="bg-white flex justify-between items-center px-4 py-3 text-gray-300">
          <div className="flex items-center gap-x-2">
            <SearchIcon />
            <BookmarkIcon />
            <div className="border-r border-gray-200"></div>
            <HighlighterIcon />
            <EraserIcon />
          </div>
          <div></div>
        </div>
      </div>
      {/* NEXT AND PREV BUTTONS */}
      <div>
        <PageNavButton direction="left" onClick={handlePrevPage} />
        <PageNavButton direction="right" onClick={handleNextPage} />
      </div>
      {/* <PdfReader fileUrl="/assets/pdf/python-basics-sample-chapters.pdf" /> */}
    </div>
  );
};

export default PDFReaderDist;
