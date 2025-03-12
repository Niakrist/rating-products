import { getPage } from "@/api/page";

import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import React from "react";
import { getMenu } from "@/api/menu";
import { firstLevelMenu } from "@/helpers/helpers";

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

interface ICoursesPageProps {
  params: Promise<{
    alias: string;
  }>;
}

export default async function CoursesPage({ params }: ICoursesPageProps) {
  const { alias } = await params;

  const pageData = await getPage(alias);

  if (!pageData) {
    notFound();
  }

  return <div>CoursesPage: {pageData?.title}</div>;
}
