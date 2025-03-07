import { getMenu } from "@/api/menu";
import { IPageItem, IFirstLevelMenuItem } from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Icon } from "@/ui";
import React from "react";
import styles from "./Menu.module.css";
import cn from "classnames";

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

export async function Menu(): Promise<React.JSX.Element> {
  const menu = await getMenu(0);

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
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpen,
              })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
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
