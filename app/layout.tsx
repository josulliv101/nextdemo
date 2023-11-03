import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
