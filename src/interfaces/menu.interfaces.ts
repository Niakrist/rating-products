import React from "react";
import { TopLevelCategory } from "./page.interface";

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  isOpen?: boolean;
  pages: IPageItem[];
}

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  icon: React.JSX.Element;
  id: TopLevelCategory;
}
