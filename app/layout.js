import "./globals.css";
import { site } from "@/data/content";

export const metadata = {
  title: `${site.myName} ♥ ${site.herName}`,
  description: `${site.herName}-এর জন্য একটা ভালোবাসার চিঠি`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="font-body">{children}</body>
    </html>
  );
}
