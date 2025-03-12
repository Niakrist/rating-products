import { firstLevelMenu } from "@/helpers/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypePage",
  description: "Описание TypePage",
};

interface ITypePageProps {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return firstLevelMenu.map((item) => ({ type: item.route }));
}

export default async function TypePage({ params }: ITypePageProps) {
  const { type } = await params;

  return <div>type: {type}</div>;
}
