"use client";
// components/MyPdfViewer.js
import dynamic from "next/dynamic";
import { Worker } from "@react-pdf-viewer/core";
import { version as pdfjsVersion } from "pdfjs-dist/package.json";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Viewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  { ssr: false }
);

export default function MyPdfViewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div className="pdf-viewer-container">
      {/* Use the specific version number for the PDF.js worker */}
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
}
