"use client";
import {
  IPageItem,
  IFirstLevelMenuItem,
  IMenuItem,
} from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Icon } from "@/ui";
import React from "react";
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
  menu: IMenuItem[];
}

export function Menu({ menu }: IMenuProps): React.JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // console.log("router: ", router);
  // console.log("pathname: ", pathname);
  // console.log("searchParams: ", searchParams);

  let active = TopLevelCategory.Courses;

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
        {menu.map((m) => {
          if (
            m.pages.map((p) => {
              return p.alias.includes(pathname.split("/")[2]);
            })
          ) {
            m.isOpen = true;
          } else {
            m.isOpen = false;
          }

          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpen,
                })}>
                {buildThirdLevel(m.pages, menuItem.route)}
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
          [styles.thridLevelActive]: false,
        })}
        href={`/${route}/${p.alias}`}>
        {p.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
