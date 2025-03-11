import { API } from "@/api";
import { ITopPageModel } from "@/interfaces/page.interface";

export async function getPage(alias: string): Promise<ITopPageModel | null> {
  const response = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}
