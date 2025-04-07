import './globals.css';
import type { Metadata } from 'next';
import { Inter, Crimson_Text } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson'
});

export const metadata: Metadata = {
  title: 'University Learning Platform',
  description: 'Advance your career with our professional courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${crimsonText.variable} font-sans`}>{children}</body>
    </html>
  );
} 