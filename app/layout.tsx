import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "AI Search App | Smart Results Powered by AI",
  description:
    "Discover accurate, AI-powered search results with instant summaries and sources. Built with Next.js for speed, SEO, and performance.",
  keywords: [
    "AI search",
    "Next.js search engine",
    "AI powered results",
    "web search app",
    "AI summaries",
  ],
  authors: [{ name: "Prajwal Neupane", url:"https://freelexity.vercel.app" }],
  creator: "Prajwal Neupane",
  publisher: "Solo For Learning",
  openGraph: {
    title: "AI Search App | Smart Results Powered by AI",
    description:
      "Search smarter, not harder. Get AI-powered answers with instant summaries and sources.",
    url: "https://freelexity.vercel.app",
    siteName: "AI Search App",
    images: [
      {
        url: "https://cdn.slidesharecdn.com/ss_thumbnails/customsearchengine-180818024509-thumbnail.jpg", // OG preview image
        width: 1200,
        height: 630,
        alt: "AI Search App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
