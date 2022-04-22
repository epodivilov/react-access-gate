import { CSSProperties, ReactNode } from "react";

type FlexProps = { children?: ReactNode } & Pick<
  CSSProperties,
  "flex" | "flexDirection" | "justifyContent" | "alignItems" | "gap" | "width" | "height"
>;
export function Flex({ children, ...style }: FlexProps) {
  return <div style={{ ...style, display: "flex" }}>{children}</div>;
}
