import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";
import * as pdfJS from "pdfjs-dist";

export const getPDFDocument = async (path: string) => {
  pdfJS.GlobalWorkerOptions.workerSrc =
    window.location.origin + "/pdf.worker.min.js";

  return new Promise((resolve, reject) => {
    pdfJS
      .getDocument(path)
      .promise.then((document: any) => {
        resolve(document);
      })
      .catch(reject);
  });
};

export const createPDFPage = (
  document: PDFDocumentProxy,
  page: number
): Promise<PDFPageProxy> => {
  return new Promise((resolve, reject) => {
    if (!document || !page) return reject();
    document
      .getPage(page)
      .then((pageDocument: PDFPageProxy) => {
        resolve(pageDocument);
      })
      .catch((error: any) => reject(error));
  });
};

export const renderPDFToCanvas = (
  pageDocument: PDFPageProxy,
  canvas: HTMLCanvasElement
): Promise<HTMLCanvasElement> => {
  return new Promise((resolve, reject) => {
    pageDocument
      .render({
        canvasContext: canvas.getContext("2d") as CanvasRenderingContext2D,
        viewport: pageDocument.getViewport({ scale: 1 }),
      })
      .promise.then(function () {
        resolve(canvas);
      });
  });
};
