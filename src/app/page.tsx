// "use client";
import React from "react";
import { Button, Htag, P, Tag } from "@/ui";
import { getMenu } from "@/api/menu";

export default async function Home() {
  // const [rating, setRating] = useState<number>(2);

  const menu = await getMenu(0);

  console.log("menu: ", menu);

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
      {/* <Rating rating={rating} isEditable={true} setRating={setRating} /> */}

      <div>{JSON.stringify(menu)}</div>
    </article>
  );
}
