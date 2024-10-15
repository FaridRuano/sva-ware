import "@public/styles/globals.scss"
import { Suspense } from "react";

export const metadata = {
  title: "School of Visual Arts",
  description: "Become a Pro with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
