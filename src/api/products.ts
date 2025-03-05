import { API } from "@/api";
import { IProductModel } from "@/interfaces/product.interface";

export async function getProducts(categoty: string): Promise<IProductModel[]> {
  const response = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({ categoty }),
    headers: new Headers({ "content-type": "application/json" }),
  });
  return response.json();
}
