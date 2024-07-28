import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/interfaces";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Input validation",
  description: "Input steps",
  icons: { icon: "/logo.svg" },
};

interface Props extends ChildProps {
  params: { lng: string };
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} suppressHydrationWarning dir={dir(lng)}>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
