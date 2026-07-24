import type { Metadata } from "next";
import "./globals.css";

const title = "Yang Xiang | UNC Chapel Hill";
const description =
  "Yang Xiang is a Ph.D. candidate at UNC Chapel Hill researching graph and network alignment, brain connectivity registration, and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL("https://xya2001.github.io"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
