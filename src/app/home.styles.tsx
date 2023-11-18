"use client";
import { styled, theme, keyframes } from "@/stitches";

export const HomeContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: ".8rem",
  variants: {
    dotted: {
      true: {
        backgroundImage:
        // HEX color ending 66 = 40% opacity
          `radial-gradient(circle at .1rem .1rem, ${theme.colors.accent.value}66 .1rem, transparent .1rem)`,
        backgroundSize: "40px 40px",
        backgroundPosition: "calc(50% - .1rem) calc(50% - .1rem)",
      },
    },
  },
});

export const LogoContainer = styled("div", {
  width: "clamp(12rem, 80%, 20rem)",
  aspectRatio: "1",
  position: "relative",
  borderRadius: "9999px",
  border: "2px solid $accent",
  transition: "transform .3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
  img: {
    borderRadius: "9999px",
  },
});

const pulseAnimation = keyframes({
  "0%, 100%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.5)" },
});

export const FavoriteBtn = styled("button", {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  variants: {
    pulsing: {
      true: {
        span: {
          animation: `${pulseAnimation} 2s infinite`,
        },
      },
    },
  },
});

export const MediaContainer = styled("a", {
  textDecoration: "underline",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  // HEX color ending in 66 = 40% of opacity
  filter: `drop-shadow(0 0 .6rem ${theme.colors.accent.value}66)`,
  color: "$accent",
  transition: 'transform .3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)'
  }
});

export const MediaTitle = styled("span", {});

export const MyMediasContainer = styled("div", {
  width: "clamp(12rem, 80%, 20rem)",
  padding: ".8rem",
  borderRadius: "1.6rem",
  border: "1px dashed $accent",
  display: "flex",
  flexDirection: "column",
  gap: "2vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$primary",
});

export const MyMediasTitle = styled("h3", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});
