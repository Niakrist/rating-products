import React from "react";
import { IIconProps } from "./Icon.props";
import IconArrow from "./icons/IconArrow";
import IconBook from "./icons/IconBook";
import IconCloud from "./icons/IconCloud";
import IconHat from "./icons/IconHat";
import IconLogo from "./icons/IconLogo";
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
    iconLogo: <IconLogo {...props} />,
  };

  return icons[name];
};
