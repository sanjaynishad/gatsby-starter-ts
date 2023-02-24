import { ReactNode } from 'react';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      Footer
    </div>
  );
}
