import { IMenuItem } from "@/interfaces/menu.interfaces";
import React from "react";
import { Menu } from "../Menu/Menu";
import { ISidebarProps } from "./Sidebar.props";

export const Sidebar = ({
  menu,
  ...props
}: ISidebarProps & { menu: IMenuItem[] }) => {
  // if (!menu) return <div>loading</div>;
  return <Menu {...props} menu={menu} />;
};
