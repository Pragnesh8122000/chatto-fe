import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./data/theme";
import ReduxProvider from "./providers/redux-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["Inter"],
});

export const metadata: Metadata = {
  title: "Chatto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <link
            rel="icon"
            href="/assets/logos/logo.png"
            type="image/png"
            sizes="<generated>"
          />
          <body className={poppins.className}>{children}</body>
        </html>
      </ThemeProvider>
    </ReduxProvider>
  );
}