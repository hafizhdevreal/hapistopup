import "./globals.css";

export const metadata = {
  title: "Hapis Topup",
  description: "Topup Game Murah Cepat Aman"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}