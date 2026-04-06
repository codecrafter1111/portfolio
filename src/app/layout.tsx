import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Prabhat Yadav - MERN Developer Portfolio',
  description:
    'Futuristic portfolio showcasing MERN stack experience, scalable web applications, and modern development practices.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://prabhat-portfolio.vercel.app',
    title: 'Prabhat Yadav - MERN Developer',
    description: 'Futuristic MERN Developer Portfolio',
    images: [
      {
        url: 'https://prabhat-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e27',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0e27" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary text-primary transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
