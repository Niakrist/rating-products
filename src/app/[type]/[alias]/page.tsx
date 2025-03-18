import { getPage } from "@/api/page";

import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import React from "react";
import { getMenu } from "@/api/menu";
import { firstLevelMenu } from "@/helpers/helpers";
import { TopPageComponent } from "@/components";
import { getProducts } from "@/api/products";

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const params = [];

  for (const itemMenu of firstLevelMenu) {
    const menu = await getMenu(itemMenu.id);
    const aliases = menu.flatMap((item) =>
      item.pages.map((page) => ({
        alias: page.alias,
        type: itemMenu.route,
      }))
    );
    params.push(...aliases);
  }

  return params;
}

interface ITopPageProps {
  params: Promise<{
    alias: string;
    type: string;
  }>;
}

export default async function TopPage({ params }: ITopPageProps) {
  const { alias, type } = await params;

  const pageData = await getPage(alias);

  if (!pageData) {
    notFound();
  }
  const products = await getProducts(pageData?.category, 10);

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === type);

  if (!firstCategoryItem) {
    notFound();
  }

  return (
    <div>
      <TopPageComponent
        page={pageData}
        products={products}
        firstCategory={firstCategoryItem.id}
      />
    </div>
  );
}
