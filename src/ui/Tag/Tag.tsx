import React from "react";
import cn from "classnames";

import styles from "./Tag.module.css";
import { ITagProps } from "./Tag.props";

export const Tag: React.FC<ITagProps> = ({
  size,
  href,
  color,
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.ghost]: color === "ghost",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}>
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
