import { Footer, Header, Sidebar } from "@/components";
import { Metadata } from "next/types";
import { Noto_Sans } from "next/font/google";
import { getMenu } from "@/api/menu";
import cn from "classnames";

import "./globals.css";
import styles from "./Layout.module.css";

const getNotoSana = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenu(0);

  return (
    <html lang="ru">
      <body className={cn(getNotoSana.className, styles.wrapper)}>
        <Header className={styles.header} />
        <Sidebar menu={menu} className={styles.sidebar} />
        <div className={styles.content}>{children}</div>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
