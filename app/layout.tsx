import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chatbot E2E Test - Render',
  description: 'AI-powered chatbot integration with modern features.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>        
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}