import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TV Channel Simulator – Turn YouTube Playlists into Live TV",
  description: "Transform your YouTube playlists into scheduled TV-like channels with programming blocks, commercials, and live viewer chat."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11afd3a0-a4f4-4c9c-8ed7-a9166f674f2b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
