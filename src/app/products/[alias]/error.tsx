"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>Что-то полшо не так</div>
      <div>{JSON.stringify(error)}</div>
      <button onClick={() => reset()}>Ещё раз</button>
    </>
  );
}
