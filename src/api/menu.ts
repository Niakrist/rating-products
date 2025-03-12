import { API } from "@/api";
import { IMenuItem } from "@/interfaces/menu.interfaces";

export async function getMenu(firstCategory: number): Promise<IMenuItem[]> {
  const response = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  const data = await response.json();
  console.log("API response:", data);
  return data;
}
