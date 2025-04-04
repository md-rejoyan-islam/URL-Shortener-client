import { AuthProvider } from "@/components/auth-provider";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getCookies } from "./actions/actions";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkSnip - URL Shortener",
  description: "Shorten your URLs and track their performance",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getCookies();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider token={token}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
