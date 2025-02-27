import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IBudget } from '../../types';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BudgetChartProps {
  data: IBudget[];
}

const BudgetChart: React.FC<BudgetChartProps> = ({ data }) => {
  const groupedByMonth = data.reduce((acc, item) => {
    const monthKey = format(new Date(item.month), 'MMMM yyyy', { locale: enUS });
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(item);
    return acc;
  }, {} as Record<string, IBudget[]>);

  const chartData = {
    labels: Object.keys(groupedByMonth).map(month => 
      groupedByMonth[month].map(item => `${item.category} (${month})`)).flat(),
    datasets: [
      {
        label: 'Planned Budget',
        data: Object.values(groupedByMonth).map(items => 
          items.map(item => item.planned)).flat(),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Actual Budget',
        data: Object.values(groupedByMonth).map(items => 
          items.map(item => item.actual)).flat(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Budget Comparison by Category'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount (USD)'
        }
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BudgetChart;
