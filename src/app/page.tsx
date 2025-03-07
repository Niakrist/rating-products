import React from "react";
import { Button, Htag, P, Tag } from "@/ui";
import { IMenuItem } from "@/interfaces/menu.interfaces";
import { Menu } from "@/components/Menu/Menu";
import { getMenu } from "@/api/menu";
import { getProducts } from "@/api/products";

interface IHomeProps {
  menu: IMenuItem[];
  firstCategory: number;
}

export default async function Home() {
  // const [rating, setRating] = useState<number>(2);

  const products = await getProducts("Photoshop", 10);

  return (
    <article>
      <Htag tag="h1">Главная страница</Htag>
      <Button arrow="right" appearence="ghost">
        ghost
      </Button>
      <Button arrow="right" appearence="primary">
        primary
      </Button>
      <P size="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        accusamus.
      </P>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        accusamus.
      </P>
      <P size="large">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        accusamus.
      </P>
      <Tag size="medium" color="ghost">
        ghost
      </Tag>
      <Tag size="medium" color="green">
        green
      </Tag>
      <Tag size="medium" color="grey">
        grey
      </Tag>
      <Tag size="medium" color="primary">
        primary
      </Tag>
      <Tag size="medium" color="red">
        red
      </Tag>
    </article>
  );
}
