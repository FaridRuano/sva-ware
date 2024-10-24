import CookieBanner from "@public/components/public/CookieBanner";
import "@public/styles/globals.scss"

export const metadata = {
  title: "School of Visual Arts",
  description: "Become a Pro with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <CookieBanner/>
          {children}
      </body>
    </html>
  );
}
