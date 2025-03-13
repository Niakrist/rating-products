"use client";
import {
  IPageItem,
  IFirstLevelMenuItem,
  IMenuItem,
} from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { getMenu } from "@/api/menu";
import Link from "next/link";
import { firstLevelMenu } from "@/helpers/helpers";

export function Menu({ ...props }): React.JSX.Element {
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>([]);

  const getFirstLevel = () => {
    const currentRout = pathname.split("/")[1];
    const topLevelCategory = firstLevelMenu.find(
      (m) => m.route === currentRout
    );

    return topLevelCategory?.id || TopLevelCategory.Courses;
  };

  const [firstLevelMenuActive, setFirstLevelMenuActive] = useState(() =>
    getFirstLevel()
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
