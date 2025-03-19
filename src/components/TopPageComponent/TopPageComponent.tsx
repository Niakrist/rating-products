import { Card, Htag, P, Tag } from "@/ui";
import React from "react";
import { HHData } from "@/components";

import styles from "./TopPageComponent.module.css";
import { ITopPageProps } from "./TopPageComponent.props";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageProps): React.JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="medium">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <ul>
        {products &&
          products.map((product) => <li key={product._id}>{product.title}</li>)}
      </ul>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HHData {...page.hh} />}
    </div>
  );
};
