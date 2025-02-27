import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const Sidebar: React.FC = () => {
    const { scrollToSection, isSidebarOpen } = useDashboard();

    return(
        <aside className={`fixed top-0 left-0 h-screen w-64 bg-teal-500 transition-transform duration-300 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            <div className="text-white">
                <button 
                    onClick={() => {
                        console.log('Clicking dashboard button');
                        scrollToSection('top');
                    }}
                    className="text-xl font-semibold mb-6 w-full text-left hover:text-teal-100"
                >
                    Dashboard
                </button>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <button 
                                onClick={() => scrollToSection('kpi')}
                                className="w-full text-left py-2 px-4 hover:bg-teal-400 rounded"
                            >
                                KPI's
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('performance')}
                                className="w-full text-left py-2 px-4 hover:bg-teal-400 rounded"
                            >
                                Performance
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('budget')}
                                className="w-full text-left py-2 px-4 hover:bg-teal-400 rounded"
                            >
                                Budget
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;