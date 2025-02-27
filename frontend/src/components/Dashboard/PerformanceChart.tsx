import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IPerformance } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PerformanceChartProps {
  data: IPerformance[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  // Departmanları grupla
  const departments = [...new Set(data.map(item => item.department))];
  
  const chartData = {
    labels: departments,
    datasets: [
      {
        label: 'Department Performance',
        data: departments.map(dept => {
          const deptData = data.find(item => item.department === dept);
          return deptData ? deptData.efficiency : 0;
        }),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.4
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
        text: 'Department Performance Chart'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Productivity (%)'
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PerformanceChart;
