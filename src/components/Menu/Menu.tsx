"use client";
import {
  IPageItem,
  IFirstLevelMenuItem,
  IMenuItem,
} from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Icon } from "@/ui";
import React, { useState } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
// import { useRouter } from "next/router";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <Icon name="iconHat" />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <Icon name="iconCloud" />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <Icon name="iconBook" />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <Icon name="iconProduct" />,
    id: TopLevelCategory.Products,
  },
];

interface IMenuProps {
  // setMenu?: (secondCategory: string) => void
  menu: IMenuItem[];
}

export function Menu({ menu, ...props }: IMenuProps): React.JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentMenu, setCurrentMenu] = useState(menu);

  let active = TopLevelCategory.Courses;

  const handlSecondLevelClick = (secondCategory: string) => {
    setCurrentMenu(
      currentMenu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpen = true;
        } else {
          m.isOpen = false;
        }
        return m;
      })
    );
  };

  console.log("currentMenu: ", currentMenu);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id === active,
                })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {menu.id === active && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {currentMenu.map((m) => {
          m.pages.map((p) => {
            const path = pathname.split("/")[2];
            if (p.alias.includes(path)) {
              m.isOpen = true;
            }
          });
          return (
            <div key={m._id.secondCategory}>
              <div
                onClick={() => handlSecondLevelClick(m._id.secondCategory)}
                className={cn(styles.secondLevel, {
                  [styles.secondLevelActive]: m.isOpen,
                })}>
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpen,
                })}>
                {m.isOpen && buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: IPageItem[], route: string) => {
    return pages.map((p) => (
      <a
        key={p._id}
        className={cn(styles.thridLevel, {
          [styles.thridLevelActive]: p.alias === pathname.split("/")[2],
        })}
        href={`/${route}/${p.alias}`}>
        {p.category}
      </a>
    ));
  };

  return (
    <div {...props} className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
}
