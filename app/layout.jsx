import CookieBanner from "@public/components/public/CookieBanner";
import "@public/styles/globals.scss"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Visual Arts School",
  description: "Become a Pro with us",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        <div className='app'>
          {children}
        </div>
      </body>
    </html>
  );
}
