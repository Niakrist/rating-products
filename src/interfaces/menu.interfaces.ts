import React from "react";

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  categoty: string;
}

export interface IMenuItem {
  _id: {
    seconsCategory: string;
  };
  isOpen: boolean;
  pages: IPageItem[];
}

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  icon: React.JSX.Element;
  // id: TopLevelCategory;
}
