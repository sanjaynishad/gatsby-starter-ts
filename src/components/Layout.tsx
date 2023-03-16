import './Layout.css';

import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
