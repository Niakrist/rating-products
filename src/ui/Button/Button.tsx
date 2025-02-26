import React from "react";

import cn from "classnames";

import styles from "./Button.module.css";
import { IButtonProps } from "./Button.props";
import { Icon } from "@/ui";

export const Button: React.FC<IButtonProps> = ({
  children,
  appearence,
  arrow = "none",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}>
      {children}
      {arrow !== "none" && (
        <Icon
          name="iconArrow"
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </button>
  );
};
