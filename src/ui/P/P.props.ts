export interface IPProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: string;
  size?: "small" | "medium" | "large";
}
