import React, { useState } from "react";
import { LOGO_SRC, LOGO_TYPE } from "../config/media.js";

// Centered 1:1 media frame. Empty until logo.png / logo.jpg / logo.jpeg /
// logo.mp4 is added to /public. Falls back to an empty frame if the file
// doesn't exist yet, instead of showing a broken image icon.
export default function MediaFrame({ size = 150, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border border-crest-border bg-crest-panel ${className}`}
      style={{ width: size, height: size }}
    >
      {!failed && LOGO_TYPE === "video" && (
        <video
          className="h-full w-full object-cover"
          src={LOGO_SRC}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          onError={() => setFailed(true)}
        />
      )}
      {!failed && LOGO_TYPE === "image" && (
        <img
          className="h-full w-full object-cover"
          src={LOGO_SRC}
          alt="Europa Crest"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
