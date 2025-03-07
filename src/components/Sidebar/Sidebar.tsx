import React from "react";
import { Menu } from "../Menu/Menu";
import { ISidebarProps } from "./Sidebar.props";

export const Sidebar = async ({
  ...props
}: ISidebarProps): Promise<React.JSX.Element> => {
  return <aside {...props}>{await Menu()}</aside>;
};
