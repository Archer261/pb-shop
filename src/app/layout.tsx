import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { CartProvider } from '@/context/CartContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PicklePro Shop',
  description: 'Your one-stop shop for premium pickle ball equipment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}