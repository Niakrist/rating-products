export interface IRatingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isEditable?: boolean;
  rating: number;
  setRating: (rating: number) => void;
}
