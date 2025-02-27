import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getKPIs, getPerformanceData, getBudgetData } from '../../services/api';
import { useDashboard } from '../../context/DashboardContext';
import KPICards from './KPICards';
import PerformanceChart from './PerformanceChart';
import BudgetChart from './BudgetChart';

const Dashboard: React.FC = () => {
  const { kpiRef, performanceRef, budgetRef } = useDashboard();
  
  const { data: kpis, isLoading: kpisLoading } = useQuery({
    queryKey: ['kpis'],
    queryFn: getKPIs
  });

  const { data: performance, isLoading: performanceLoading } = useQuery({
    queryKey: ['performance'],
    queryFn: getPerformanceData
  });

  const { data: budget, isLoading: budgetLoading } = useQuery({
    queryKey: ['budget'],
    queryFn: getBudgetData
  });

  if (kpisLoading || performanceLoading || budgetLoading) {
    return <div>Uploading data...</div>;
  }

  return (
    <div className="p-6">
      <section ref={kpiRef} className="mb-8">
        <KPICards data={kpis || []} />
      </section>
      <section ref={performanceRef} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <PerformanceChart data={performance || []} />
      </section>
      <section ref={budgetRef} className="bg-white p-6 rounded-lg shadow-md">
        <BudgetChart data={budget || []} />
      </section>
    </div>
  );
};

export default Dashboard;


