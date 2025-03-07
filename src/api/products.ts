import { API } from "@/api";
import { IProductModel } from "@/interfaces/product.interface";

export async function getProducts(
  category: string,
  limit: number
): Promise<IProductModel[]> {
  const response = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({ category, limit }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  return response.json();
}
