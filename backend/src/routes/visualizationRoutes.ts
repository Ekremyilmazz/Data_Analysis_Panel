import express from 'express';
import{
    getKPIs,
    createKPI,
    getPerformanceData,
    createPerformanceData,
    getBudgetData,
    createBudgetData
} from '../controllers/visualizationController';

const router = express.Router();

//KPI Routes
router.get('/kpis', getKPIs);
router.post('/kpis', createKPI);

//Performance Routes
router.get('/performance', getPerformanceData);
router.post('/performance', createPerformanceData);

//Budget Routes
router.get('/budget', getBudgetData);
router.post('/budget', createBudgetData);

export default router;
