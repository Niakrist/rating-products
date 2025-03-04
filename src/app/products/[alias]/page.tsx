import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProductsPage({
  params,
}: {
  params: { alias: string };
}) {
  const pageData = await getPage(params.alias);

  if (!pageData) {
    notFound();
  }

  console.log("pageData: ", pageData);

  return <div>Product {pageData.title}</div>;
}
