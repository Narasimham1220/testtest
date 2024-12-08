import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

export function Header() {
  const { toggleMenu } = useNavigation();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="ml-4 text-xl font-semibold text-gray-900">MyApp</h1>
          </div>
        </div>
      </div>
    </header>
  );
}