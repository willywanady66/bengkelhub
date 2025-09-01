"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Styles (required)
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface Props {
  url: string; // can be your proxied URL or direct blob (if CORS enabled)
}

export default function PdfViewer({ url }: Props) {
  const defaultLayout = defaultLayoutPlugin(); // toolbar + thumbnails + search

  return (
    <div style={{ height: "85vh", border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
      {/* PDF.js worker (use a fixed version to avoid CDN changes) */}
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={url} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
}
