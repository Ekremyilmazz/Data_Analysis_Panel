import React, { useState } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useDashboard } from '../../context/DashboardContext';

const Header: React.FC = () => {
    const isScrolled = useScroll();
    const { toggleSidebar, isSidebarOpen } = useDashboard();
    const userType = 'Enterprise'; 

    return (
        <header className={`
            fixed top-0 right-0 z-50 transition-all duration-300
            ${isSidebarOpen ? 'left-64' : 'left-0'}
            ${isScrolled 
                ? 'bg-gradient-to-r from-teal-400/90 to-teal-500/90 backdrop-blur-sm' 
                : 'bg-gradient-to-r from-teal-500 to-teal-600'
            }
            shadow-lg h-16
        `}>
            <div className="h-full px-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={toggleSidebar}
                        className="text-white hover:text-teal-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-bold text-white">
                        Data Analyze Panel
                    </h1>
                    {userType && (
                        <span className={`px-3 py-1 ${
                            userType === 'Enterprise' ? 'bg-teal-400' : 'bg-blue-400'
                        } text-white text-sm rounded-full`}>
                            {userType}
                        </span>
                    )}
                </div>
                
                <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-end">
                        <span className="text-teal-50 text-sm">Last Updated</span>
                        <span className="text-white font-medium">
                            {new Date().toLocaleDateString('tr-TR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                    </div>
                    <div className="h-8 w-px bg-teal-300"></div>
                    <button onClick={() => window.location.reload()} className="px-4 py-2 bg-teal-400 hover:bg-teal-300 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Refresh Data</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;