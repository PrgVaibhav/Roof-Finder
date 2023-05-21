import { Navbar } from "@/components/Navbar";
import "../styles/globals.scss";

export const metadata = {
  title: "Roof Finder",
  description: "Find the best house for you and your family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
