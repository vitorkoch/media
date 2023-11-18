import "material-symbols/rounded.css";
import icons from "@material-symbols/metadata/versions.json";
import { StyledIcon } from "./icon.styles";
import type { ComponentProps } from "react";

export type Icons = keyof typeof icons;

type IconProps = {
  icon: Icons;
} & ComponentProps<typeof StyledIcon>;

export function Icon(props: IconProps) {
  return (
    <StyledIcon
      {...props}
      className={`material-symbols-rounded ${props.className || ""}`}
    />
  );
}
