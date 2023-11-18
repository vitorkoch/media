"use client";
import {
  FavoriteBtn,
  HomeContainer,
  LogoContainer,
  MediaContainer,
  MediaTitle,
  MyMediasContainer,
  MyMediasTitle,
} from "./home.styles";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const isDotted = searchParams.get("dotted") !== "false";

  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("isFavorite") === "true",
  );

  useEffect(() => {
    localStorage.setItem("isFavorite", `${isFavorite}`);
  }, [isFavorite]);

  return (
    <HomeContainer dotted={isDotted}>
      <LogoContainer>
        <Image
          src="https://avatars.githubusercontent.com/u/105176076?v=4"
          alt=""
          fill={true}
        />
      </LogoContainer>
      <h2>VITOR KOCH</h2>

      <FavoriteBtn
        type="button"
        pulsing={isFavorite}
        onClick={() => {
          setIsFavorite((prev) => !prev);
        }}
      >
        <Icon
          icon="favorite"
          css={{
            color: "$accent",
            fontVariationSettings: `'FILL' ${isFavorite ? "1" : "0"}`,
          }}
        />
      </FavoriteBtn>

      <MyMediasContainer>
        <MyMediasTitle>My social medias</MyMediasTitle>
        <MediaContainer href="https://github.com/vitorkoch" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <MediaTitle>Github</MediaTitle>
        </MediaContainer>
        <MediaContainer
          href="https://www.linkedin.com/in/vitor-koch-20278b143/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <MediaTitle>LinkedIn</MediaTitle>
        </MediaContainer>
        <MediaContainer
          href="https://www.instagram.com/vitorgkoch/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <MediaTitle>Instagram</MediaTitle>
        </MediaContainer>
      </MyMediasContainer>
    </HomeContainer>
  );
}
