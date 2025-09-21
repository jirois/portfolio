import { Metadata, Viewport } from "next";
import { ThemeProvider } from "./hooks/use-theme";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
export const metadata: Metadata = {
  title: {
    default: "Omanudhowho Ajiri - Portfolio",
    template: "%s | Omanudhowho Ajiri",
  },
  description:
    "Omanudhowho Ajiri's personal portfolio website showcasing projects, skills, and experience.",
  keywords: [
    "portfolio",
    "frontend developer",
    "react",
    "nextjs",
    "typescript",
  ],
  authors: [{ name: "Omanudhowho Ajiri" }],
  creator: "Omanudhowho Ajiri",
  publisher: "Omanudhowho Ajiri",

  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Omanudhowho Ajiri - Portfolio",
    description:
      "Omanudhowho Ajiri's personal portfolio website showcasing projects, skills, and experience.",
    siteName: "Omanudhowho Ajiri Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on page load*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
