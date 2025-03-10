import { API } from "@/api";
import { ITopPageModel } from "@/interfaces/page.interface";

export async function getPage(alias: string): Promise<ITopPageModel | null> {
  // console.log("start");
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve(console.log("2s"));
  //   }, 2000)
  // );

  const response = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}
