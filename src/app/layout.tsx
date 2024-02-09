import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Stylesheet } from "./globals.styles";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Vitor Koch | Media",
  description: "Koch's medias",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/105176076?v=4",
    shortcut:
      "https://instagram.fbel2-1.fna.fbcdn.net/v/t51.2885-19/295618570_765236367947175_3770354398092368966_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbel2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1g4VNF3bFnEAX8fa9Eh&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCgQTFxt1At2VDYAzeq6aMjIqCo5vdJBENdLg_76JiEfg&oe=655CD06F&_nc_sid=8b3546",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
        <Stylesheet />
      </body>
    </html>
  );
}
