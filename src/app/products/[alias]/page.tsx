import { getPage } from "@/api/page";

import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import React from "react";
import { getMenu } from "@/api/menu";

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

interface IProductsPageProps {
  params: Promise<{
    alias: string;
  }>;
}

export default async function ProductsPage({ params }: IProductsPageProps) {
  const { alias } = await params;
  const pageData = await getPage(alias);

  if (!pageData) {
    notFound();
  }

  return <div>Product {pageData?.title}</div>;
}
