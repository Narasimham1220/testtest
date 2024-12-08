import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { formatDate } from './utils/formatters';

function App() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Welcome to Your Dashboard
          </h2>
          <p className="text-gray-600 mb-4">
            Today is {formatDate(new Date())}
          </p>
          <Button>Get Started</Button>
        </Card>
      </div>
    </MainLayout>
  );
}

export default App;