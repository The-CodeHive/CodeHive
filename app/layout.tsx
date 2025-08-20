import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeHive",
  description: "Collaborative Code Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&family=Bitcount:wght@100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Mozilla+Text:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Danfo&family=Playwrite+US+Trad&family=Sometype+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
