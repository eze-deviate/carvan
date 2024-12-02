import React, { useState } from "react";
import { RenderPage, RenderPageProps, Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

type Props = {};
// const renderPage: RenderPage = (props: RenderPageProps) => (
//   <>
//     {props.canvasLayer.children}
//     <div
//       style={{
//         alignItems: "center",
//         display: "flex",
//         height: "100%",
//         justifyContent: "center",
//         left: 0,
//         position: "absolute",
//         top: 0,
//         width: "100%",
//       }}
//     >
//       <div
//         style={{
//           color: "rgba(0, 0, 0, 0.2)",
//           fontSize: `${8 * props.scale}rem`,
//           fontWeight: "bold",
//           textTransform: "uppercase",
//           transform: "rotate(-45deg)",
//           userSelect: "none",
//         }}
//       >
//         Draft
//       </div>
//     </div>
//     {props.annotationLayer.children}
//     {props.textLayer.children}
//   </>
// );

const PDFReader = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="/assets/pdf/python-basics-sample-chapters.pdf"
          renderPage={(props: RenderPageProps) => (
            <>
              {props.pageIndex == currentPage ? (
                <>
                  {props.canvasLayer.children}
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.2)",
                        fontSize: `${8 * props.scale}rem`,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transform: "rotate(-45deg)",
                        userSelect: "none",
                      }}
                    >
                      Draft
                    </div>
                  </div>
                  {props.annotationLayer.children}
                  {props.textLayer.children}
                </>
              ) : null}
            </>
          )}
        />
      </Worker>
    </div>
  );
};

export default PDFReader;
