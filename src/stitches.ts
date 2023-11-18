"use client";
import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, theme, createTheme, getCssText } =
  createStitches({
    theme: {
      colors: {
        primary: "#1e1e2e",
        secondary: "#cdd6f4",
        accent: "#94e2d5",
      },
    },
  });
