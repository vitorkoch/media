import { MediaContainer, MediaTitle } from "./media.styles";
export function Media({ url, title }: { url: string; title: string }) {
  return (
    <MediaContainer href={url}>
      <MediaTitle>{title}</MediaTitle>
    </MediaContainer>
  );
}
