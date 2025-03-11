import React from "react";
import { IIconProps } from "./Icon.props";
import IconArrow from "./icons/IconArrow";
import IconBook from "./icons/IconBook";
import IconCloud from "./icons/iconCloud";
import IconHat from "./icons/IconHat";
import IconProduct from "./icons/IconProduct";
import IconSearch from "./icons/IconSearch";
import IconStar from "./icons/IconStar";

export const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
  const icons = {
    iconArrow: <IconArrow {...props} />,
    iconStar: <IconStar {...props} />,
    iconHat: <IconHat {...props} />,
    iconCloud: <IconCloud {...props} />,
    iconBook: <IconBook {...props} />,
    iconProduct: <IconProduct {...props} />,
    iconSearch: <IconSearch {...props} />,
  };

  return icons[name];
};
