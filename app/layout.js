import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { ProductsContextProvider } from '@/components/ProductsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commmerce with Nextjs ',
  description: 'An E-commerce platform built using nextjs and mongodb',
};

export default function RootLayout({ children }) {
  return (
    <ProductsContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ProductsContextProvider>
  );
}
