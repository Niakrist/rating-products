import React from "react";
import { ISidebarProps } from "./Sidebar.props";

export const Sidebar: React.FC<ISidebarProps> = ({ ...props }) => {
  return <aside {...props}>Sidebar</aside>;
};
