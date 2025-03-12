import { IMenuItem } from "@/interfaces/menu.interfaces";
import React from "react";
import { Search, Menu } from "@/components";
import { ISidebarProps } from "./Sidebar.props";
import { Icon } from "@/ui";
import cn from "classnames";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ className, ...props }: ISidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Icon className={styles.logo} name="iconLogo" />
      <Search />
      <Menu />
    </div>
  );
};
