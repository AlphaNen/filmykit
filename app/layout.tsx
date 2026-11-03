import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

function metadataBaseUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return new URL(explicit);
  }
  const vercel = process.env.VERCEL_URL;
  if (vercel) {
    return new URL(`https://${vercel}`);
  }
  return new URL("http://localhost:3000");
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: "fylmkit — AI video tool for brand, product & marketing",
  description:
    "Fylmkit is an AI video tool for your brand, products, and marketing. Built for teams that need to post constantly and have no video crew.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "fylmkit — AI video tool for brand, product & marketing",
    description:
      "Set up your brand once. Turn products and campaigns into on-brand short-form video. Coming soon.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
