import React from "react";
import { IFooterProps } from "./Footer.props";

import styles from "./Footer.module.css";

import cn from "classnames";

export const Footer = ({
  className,
  ...props
}: IFooterProps): React.JSX.Element => {
  const date = new Date();
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p>OwlTop © 2020 - {date.getFullYear()} Все права защищены</p>
      <a className={styles.link} href="">
        Пользовательское соглашение
      </a>
      <a className={styles.link} href="">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
