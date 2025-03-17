import React from "react";

import styles from "./TopPageComponent.module.css";
import { ITopPageProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageProps): React.JSX.Element => {
  return (
    <>
      <h1>page.title {page.title}</h1>
      <div>{page.title}</div>;
    </>
  );
};
