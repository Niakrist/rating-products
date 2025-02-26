import React from "react";
import cn from "classnames";

import { IPProps } from "./P.props";
import styles from "./P.module.css";

export const P: React.FC<IPProps> = ({
  size = "medium",
  children,
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(styles.text, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}>
      {children}
    </p>
  );
};
