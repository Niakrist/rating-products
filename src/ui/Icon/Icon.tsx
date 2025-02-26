import React from "react";
import { IIconProps } from "./Icon.props";
import IconArrow from "./icons/IconArrow";
import IconStar from "./icons/IconStar";

export const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
  const icons = {
    iconArrow: <IconArrow {...props} />,
    iconStar: <IconStar {...props} />,
  };

  return icons[name];
};
