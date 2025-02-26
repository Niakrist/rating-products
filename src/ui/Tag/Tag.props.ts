import React from "react";

export interface ITagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  size: "small" | "medium";
  color: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
