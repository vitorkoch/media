"use client";
import { styled } from "@/stitches";
import { useRef, useState } from "react";

const Iframe = styled("iframe", {
  backgroundColor: "$primary",
  width: "20rem",
  border: "none",
  overflow: "hidden",
});

export default function Embed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  return (
    <>
      <Iframe
        src="/"
        title="Koch's medias"
        ref={iframeRef}
        height={iframeHeight * 1.2}
        onLoad={() => {
          if (iframeRef.current?.contentWindow) {
            setIframeHeight(
              iframeRef.current.contentWindow?.document.body.scrollHeight,
            );
            console.log(
              iframeRef.current.contentWindow?.document.body.scrollHeight,
            );
          }
        }}
      />
    </>
  );
}
