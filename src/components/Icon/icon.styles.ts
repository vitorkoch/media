"use client";
import { styled } from "@/stitches";

export const StyledIcon = styled("span", {
  "&::before": {
    content: "attr(icon)",
  },
});
