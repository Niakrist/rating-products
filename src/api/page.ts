import { API } from "@/api";
import { IPageItem } from "@/interfaces/menu.interfaces";

export async function getPage(alias: string): Promise<IPageItem | null> {
  const response = await fetch(API.topPage.byAlias + alias);
  if (!response.ok) {
    return null;
  }

  return response.json();
}
