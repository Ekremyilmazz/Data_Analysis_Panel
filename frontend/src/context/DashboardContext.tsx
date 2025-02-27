import { createContext, useContext, RefObject } from 'react';

interface DashboardContextType {
  scrollToSection: (section: 'top' | 'kpi' | 'performance' | 'budget') => void;
  kpiRef: RefObject<HTMLDivElement>;
  performanceRef: RefObject<HTMLDivElement>;
  budgetRef: RefObject<HTMLDivElement>;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardContext = createContext<DashboardContextType>({} as DashboardContextType);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export { DashboardContext };
