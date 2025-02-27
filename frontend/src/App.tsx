import React, { useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import { DashboardContext } from './context/DashboardContext';
import Footer from './components/Layout/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const kpiRef = useRef<HTMLDivElement>(null);
  const performanceRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (section: 'top' | 'kpi' | 'performance' | 'budget') => {
    if (section === 'top') {
      mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const refs = {
      kpi: kpiRef,
      performance: performanceRef,
      budget: budgetRef
    };

    refs[section].current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContext.Provider value={{ 
        scrollToSection,
        kpiRef,
        performanceRef,
        budgetRef,
        isSidebarOpen,
        toggleSidebar
      }}>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <Header />
            <main ref={mainRef} className="flex-1 pt-20 px-6 overflow-y-auto h-[calc(100vh-4rem)]">
              <Dashboard />
            </main>
            <Footer />
          </div>
        </div>
      </DashboardContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
