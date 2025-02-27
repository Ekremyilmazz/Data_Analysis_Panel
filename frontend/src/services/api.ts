import axios from 'axios';
import {IKPI, IPerformance, IBudget} from '../types';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/visualization'
});

export const getKPIs = () => api.get<IKPI[]>('/kpis').then(res => res.data);

export const getPerformanceData = () => api.get<IPerformance[]>('/performance').then(res => res.data);

export const getBudgetData = () => api.get<IBudget[]>('/budget').then(res => res.data);