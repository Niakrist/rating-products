import React from "react";

import styles from "./TopPage.module.css";
import { ITopPageProps } from "./TopPage.props";

export const TopPage = async ({
  page,
  products,
  firstCategory,
}: ITopPageProps): Promise<React.JSX.Element> => {
  return (
    <>
      <h1>page.title {page.title}</h1>
      <div>{page.title}</div>;
    </>
  );
};
