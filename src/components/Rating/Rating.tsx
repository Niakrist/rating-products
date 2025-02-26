"use client";
import { Icon } from "@/ui";
import React, { JSX, useEffect, useState, KeyboardEvent } from "react";
import { IRatingProps } from "./Rating.props";
import cn from "classnames";

import styles from "./Rating.module.css";

export const Rating: React.FC<IRatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (isEditable) {
      constructRating(i);
    }
  };

  const onClick = (i: number): void => {
    if (!isEditable || !setRating) return;

    setRating(i);
  };

  const handleSpace = (e: React.KeyboardEvent<SVGSVGElement>, i: number) => {
    if (!setRating || e.code !== "Space") return;

    setRating(i);
  };

  const constructRating = (currentRaing: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      console.log("I: ", i);
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRaing,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}>
          <Icon
            name="iconStar"
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGSVGElement>) =>
              isEditable && handleSpace(e, i + 1)
            }
          />
        </span>
      );
    });

    setRatingArray(updateArray);
  };

  return (
    <div>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
