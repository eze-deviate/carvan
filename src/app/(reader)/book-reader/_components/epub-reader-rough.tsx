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

  // const highlightText = () => {
  //   if (!renditionRef.current || !isHighlightMode) return;

  //   const range = renditionRef.current.getRange();
  //   if (range) {
  //     const highlight: Highlight = {
  //       text: range.toString(),
  //       location: currentLocation?.start.cfi || "",
  //     };
  //     setHighlights((prev) => [...prev, highlight]);
  //   }
  // };

  const removeHighlight = (highlightToRemove: Highlight) => {
    setHighlights((prev) =>
      prev.filter(
        (highlight) => highlight.location !== highlightToRemove.location
      )
    );
  };

  const bookmarkCurrentPage = () => {
    if (!bookInstance || !currentLocation) return;

    const bookmark = currentLocation.start.cfi;
    if (!bookmarks.includes(bookmark)) {
      setBookmarks((prev) => [...prev, bookmark]);
    }
  };

  const goToBookmark = (bookmark: string) => {
    if (renditionRef.current) {
      renditionRef.current.display(bookmark);
    }
  };

  const removeBookmark = (bookmarkToRemove: string) => {
    setBookmarks((prev) =>
      prev.filter((bookmark) => bookmark !== bookmarkToRemove)
    );
  };

  // const searchDocument = async () => {
  //   if (!bookInstance) return;

  //   const results: SearchResult[] = [];
  //   const searchText = searchQuery.toLowerCase();

  //   // Access spine items from bookInstance.spine.items
  //   const spineItems = bookInstance.spine.items;

  //   for (const spineItem of spineItems) {
  //     try {
  //       const contents = await spineItem.load(bookInstance.load.bind(bookInstance)); // Load spine item content
  //       const text = contents?.textContent || ""; // Extract text content
  //       spineItem.unload(); // Unload spine item after usage to save memory

  //       const index = text.toLowerCase().indexOf(searchText);
  //       if (index !== -1) {
  //         results.push({
  //           cfi: spineItem.cfiBase, // Use the CFI base for navigation
  //           excerpt: text.substring(index, index + searchText.length + 50), // Capture a snippet
  //         });
  //       }
  //     } catch (err) {
  //       console.error(`Error searching spine item: ${spineItem.id}`, err);
  //     }
  //   }

  //   setSearchResults(results);
  // };

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
      <div className="toolbar">
        <button onClick={() => setIsHighlightMode(!isHighlightMode)}>
          {isHighlightMode ? "Disable Highlight" : "Enable Highlight"}
        </button>
        <button onClick={() => setIsEraserMode(!isEraserMode)}>
          {isEraserMode ? "Disable Eraser" : "Enable Eraser"}
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        {/* <button onClick={searchDocument}>Search</button> */}
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={togglePageView}>
          {isDoublePageView ? "Single Page View" : "Double Page View"}
        </button>
        <button onClick={bookmarkCurrentPage}>Bookmark Page</button>
      </div>

      <div>
        <h3>Bookmarks</h3>
        <ul>
          {bookmarks.map((bookmark, index) => (
            <li key={index}>
              <button onClick={() => goToBookmark(bookmark)}>
                Go to Bookmark
              </button>
              <button onClick={() => removeBookmark(bookmark)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="search-results">
        <h3>Search Results</h3>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
              <button onClick={() => goToBookmark(result.cfi)}>
                {result.excerpt}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={viewerRef}
        style={{ border: "1px solid #ccc", width: "100%", height: "80vh" }}
      ></div>

      <div>
        <h3>Highlights</h3>
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>
              <span>{highlight.text}</span>
              <button onClick={() => removeHighlight(highlight)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpubReader;
