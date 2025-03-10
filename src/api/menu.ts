import { API } from "@/api";
import { IMenuItem } from "@/interfaces/menu.interfaces";

export async function getMenu(firstCategory: number): Promise<IMenuItem[]> {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("2s");
      resolve("");
    }, 1000);
  });

  const response = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  return response.json();
}
