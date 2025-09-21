"use client";

import React, { useState } from "react";

interface DownloadCVButtonProps {
  className?: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
  className = "",
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);

    try {
      // Method 1: Download from public folder
      const response = await fetch("/documents/Omanudhowho_Ajiri_CV.pdf");

      if (!response.ok) {
        throw new Error("CV not found");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "Omanudhowho_Ajiri_CV.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 2000);

      // Track download (optional - for analytics)
      const gtag = (
        window as unknown as { gtag?: (...args: unknown[]) => void }
      ).gtag;
      if (typeof gtag === "function") {
        gtag("event", "download", {
          event_category: "CV",
          event_label: "Omanudhowho_Ajiri_CV.pdf",
        });
      }
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: Open in new tab
      window.open("/documents/Omanudhowho_Ajiri_CV.pdf", "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  // Alternative method for external CV hosting
  const handleDownloadCVExternal = () => {
    // Replace with your actual CV URL (Google Drive, Dropbox, etc.)
    const cvUrl =
      "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";
    window.open(cvUrl, "_blank");
  };

  return (
    <button
      onClick={handleDownloadCV}
      disabled={isDownloading}
      className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      style={{
        background: downloadComplete
          ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
          : "linear-gradient(135deg, #ff4c60 0%, #e64456 100%)",
      }}
      onMouseEnter={(e) => {
        if (!isDownloading && !downloadComplete) {
          e.currentTarget.style.background =
            "linear-gradient(135deg, #e64456 0%, #cc3d4d 100%)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isDownloading && !downloadComplete) {
          e.currentTarget.style.background =
            "linear-gradient(135deg, #ff4c60 0%, #e64456 100%)";
        }
      }}
    >
      {/* Dynamic Icon */}
      <div className="w-4 h-4">
        {isDownloading ? (
          // Loading spinner
          <svg
            className="animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ) : downloadComplete ? (
          // Success checkmark
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          // Download icon
          <svg
            className="transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
      </div>

      {/* Dynamic Text */}
      <span>
        {isDownloading
          ? "Downloading..."
          : downloadComplete
          ? "Downloaded!"
          : "Download CV"}
      </span>

      {/* File Format Badge */}
      <span
        className="px-2 py-1 text-xs font-medium rounded"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        PDF
      </span>

      {/* Hover Effect Overlay */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        }}
      />
    </button>
  );
};

export default DownloadCVButton;
