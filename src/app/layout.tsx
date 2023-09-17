import "@/app/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TS Next Template",
  description: "github.com/husinzwz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
