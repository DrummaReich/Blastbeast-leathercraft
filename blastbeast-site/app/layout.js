export const metadata = {
  title: "Blastbeast Leathercraft",
  description: "Handcrafted leather accessories for musicians",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
