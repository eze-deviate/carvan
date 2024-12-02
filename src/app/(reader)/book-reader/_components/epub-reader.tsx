import React, { useEffect, useRef, useState } from "react";
import ePub, { Rendition, Location, Book } from "epubjs";

interface Highlight {
  text: string;
  location: string;
}

interface SearchResult {
  cfi: string;
  excerpt: string;
}

interface EpubReaderProps {
  fileUrl: string;
}

const EpubReader: React.FC<EpubReaderProps> = ({ fileUrl }) => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const renditionRef = useRef<Rendition | null>(null);
  const [bookInstance, setBookInstance] = useState<Book | null>(null);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isHighlightMode, setIsHighlightMode] = useState<boolean>(false);
  const [isEraserMode, setIsEraserMode] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(100); // Percentage font size
  const [isDoublePageView, setIsDoublePageView] = useState<boolean>(false);

  useEffect(() => {
    const book = ePub(fileUrl);
    setBookInstance(book);

    const rendition = book.renderTo(viewerRef.current as HTMLElement, {
      width: "100%",
      height: "100%",
      spread: isDoublePageView ? "auto" : "none",
    });
    renditionRef.current = rendition;

    rendition.display();

    rendition.on("relocated", (location: any) => {
      setCurrentLocation(location);
    });

    return () => {
      rendition.destroy();
      book.destroy();
    };
  }, [fileUrl, isDoublePageView]);

  const zoomIn = () => {
    setFontSize((prev) => prev + 10);
    renditionRef.current?.themes.fontSize(`${fontSize + 10}%`);
  };

  const zoomOut = () => {
    setFontSize((prev) => prev - 10);
    renditionRef.current?.themes.fontSize(`${fontSize - 10}%`);
  };

  const togglePageView = () => {
    setIsDoublePageView((prev) => !prev);
  };

  return (
    <div>
      <div
        ref={viewerRef}
        style={{ border: "1px solid #ccc", width: "100%", height: "80vh" }}
      ></div>
    </div>
  );
};

export default EpubReader;
