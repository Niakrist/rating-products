import { IFirstLevelMenuItem } from "@/interfaces/menu.interfaces";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Icon } from "@/ui";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
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
