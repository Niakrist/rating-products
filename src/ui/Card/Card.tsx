import React from "react";

import styles from "./Card.module.css";
import { ICardProps } from "./Card.props";
import cn from "classnames";

export const Card: React.FC<ICardProps> = ({
  color,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === "blue",
        [styles.white]: color === "white",
      })}>
      {children}
    </div>
  );
};
