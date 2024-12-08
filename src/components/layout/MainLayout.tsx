import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useNavigation } from '../../hooks/useNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isMenuOpen } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar isOpen={isMenuOpen} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}