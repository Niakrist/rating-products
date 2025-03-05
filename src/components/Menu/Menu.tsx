import { IMenuItem } from "@/interfaces/menu.interfaces";
import React from "react";

interface IMenuProps {
  menu: IMenuItem[];
}

export const Menu: React.FC<IMenuProps> = ({ menu }) => {
  return (
    <ul>
      {menu?.map((m, i) => (
        <li key={i}>{m._id?.secondCategory}</li>
      ))}
    </ul>
  );
};
