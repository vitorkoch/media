"use client";
import { getCssText, globalCss, theme } from "@/stitches";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    border: 'none'
  },
  html: {
    minWidth: "100%",
    minHeight: "100%",
    fontSize: "62.5%",
  },
  body: {
    backgroundColor: "$primary",
    color: "$secondary",
    fontSize: "1.6rem",
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
  },
});

export function Stylesheet() {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: `${getCssText()} ${globalStyles()}` }}
    />
  );
}
