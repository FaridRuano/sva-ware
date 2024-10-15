import "@public/styles/globals.scss"

export const metadata = {
  title: "School of Visual Arts",
  description: "Become a Pro with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
