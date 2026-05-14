import "./globals.css";

export const metadata = {
  title: "AI Teaching Studio",
  description: "AI-powered lesson generation platform",
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