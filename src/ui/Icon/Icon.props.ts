import React from "react";

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "iconArrow"
    | "iconStar"
    | "iconHat"
    | "iconCloud"
    | "iconBook"
    | "iconProduct";
}
