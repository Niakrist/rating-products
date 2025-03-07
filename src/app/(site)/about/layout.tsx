import React from "react";

interface IAboutLayoutProps {
  children: React.ReactNode;
  one: React.ReactNode;
  two: React.ReactNode;
}

export default function AboutLayout({ children, one, two }: IAboutLayoutProps) {
  return (
    <div style={{ border: "5px solid black" }}>
      {children} {one} {two}
    </div>
  );
}
