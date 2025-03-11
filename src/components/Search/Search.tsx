import { Icon } from "@/ui";
import React from "react";

import styles from "./Search.module.css";

export const Search = () => {
  return (
    <form action="/search" className={styles.form}>
      <input
        className={styles.seachInput}
        id="seach"
        type="text"
        placeholder="Поиск..."
      />
      <button type="submit" className={styles.button}>
        <Icon name="iconSearch" />
      </button>
    </form>
  );
};
