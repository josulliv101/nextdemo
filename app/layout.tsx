import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { sriracha } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContentFrame from "./ui/ContentFrame";

export const metadata: Metadata = {
  title: {
    template: "%s | Pigpile",
    default: "Pigpile, online fund raising",
  },
  description: "Pigpile on good causes - free online fundraising",
  metadataBase: new URL("https://nextdemo-gray.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="bg-cover bg-bottom  h-14  flex min-h-screen">
          <div
            className="mt-10 flex"
            style={{
              color: "#555",
              position: "absolute",
              top: -30,
              right: 10,
              zIndex: 9999,
            }}
          >
            <Link
              href="/dashboard/pigpile"
              className=" flex items-center gap-5 self-start rounded-lg   px-6 py-3 text-sm font-medium  transition-colors hover:bg-blue-400 md:text-base"
            >
              Faq
            </Link>
            <Link
              href="/about"
              className=" flex items-center gap-5 self-start rounded-lg   px-6 py-3 text-sm font-medium  transition-colors hover:bg-blue-400 md:text-base"
            >
              About
            </Link>
            <Link
              href="/dashboard/pigpile"
              className=" flex items-center gap-5 self-start rounded-lg   px-6 py-3 text-sm font-medium  transition-colors hover:bg-blue-400 md:text-base"
            >
              Login
            </Link>
          </div>
          <ContentFrame>{children}</ContentFrame>
        </main>
      </body>
    </html>
  );
}
