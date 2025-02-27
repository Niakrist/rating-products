import React from "react";
import { IHeaderProps } from "./Header.props";

export const Header = ({ ...props }: IHeaderProps): React.JSX.Element => {
  return <header {...props}>Header</header>;
};
