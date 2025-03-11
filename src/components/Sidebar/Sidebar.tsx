import { IMenuItem } from "@/interfaces/menu.interfaces";
import React from "react";
import { Menu } from "../Menu/Menu";
import { Search } from "@/components";
import { ISidebarProps } from "./Sidebar.props";

export const Sidebar = ({
  menu,
  className,
  ...props
}: ISidebarProps & { menu: IMenuItem[] }) => {
  if (!menu) return <div>loading</div>;
  return (
    <div className={className}>
      <Search />

      <Menu {...props} menu={menu} />
    </div>
  );
};
