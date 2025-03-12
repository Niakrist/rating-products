"use client";
import {
  IPageItem,
  IFirstLevelMenuItem,
  IMenuItem,
} from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Icon } from "@/ui";
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { getMenu } from "@/api/menu";
import Link from "next/link";

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

export function Menu({ ...props }): React.JSX.Element {
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>([]);
  const [firstLevelMenuActive, setFirstLevelMenuActive] = useState(
    TopLevelCategory.Courses
  );

  useEffect(() => {
    const fetchMenu = async () => {
      const newMenu = await getMenu(firstLevelMenuActive);
      setCurrentMenu(newMenu);
    };
    fetchMenu();
  }, [firstLevelMenuActive]);

  const handleFirstLevelClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: TopLevelCategory
  ) => {
    e.preventDefault();
    console.log("firstLevelMenuActive:", firstLevelMenuActive);
    setFirstLevelMenuActive(id);
  };

  const handlSecondLevelClick = (secondCategory: string) => {
    setCurrentMenu(
      currentMenu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpen = !m.isOpen;
        }
        return m;
      })
    );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <div
                onClick={(e) => handleFirstLevelClick(e, menu.id)}
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id === firstLevelMenuActive,
                })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>
            {menu.id === firstLevelMenuActive && buildSecondLevel(menu)}
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
      <Link
        key={p._id}
        className={cn(styles.thridLevel, {
          [styles.thridLevelActive]: p.alias === pathname.split("/")[2],
        })}
        href={`/${route}/${p.alias}`}>
        {p.category}
      </Link>
    ));
  };

  return (
    <div {...props} className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
}
