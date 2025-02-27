import {Request, Response} from 'express';
import { KPI, Performance, Budget } from '../models';

// KPI Controller
export const getKPIs = async (req: Request, res: Response) => {
    try{
        const kpis= await KPI.find().sort({ date: -1});
        res.json(kpis);
    } catch( error){
        res.status(500).json({message: 'Error fetching KPIs'});
    }
};

export const createKPI = async (req: Request, res: Response) => {
    try{
        const kpi = new KPI(req.body);
        await kpi.save();
        res.status(201).json(kpi);
    } catch (error) {
        res.status(500).json({message: 'Error creating KPI'});
    }
};

//Performance Controller
export const getPerformanceData = async (req: Request, res: Response) => {
    try{
        const performance = await Performance.find().sort({ date: -1});
        res.json(performance);
    } catch(error){
        res.status(500).json({message: 'Error fetching performance data'});
    }
};

export const createPerformanceData = async (req: Request, res: Response) => {
    try{
        const performance = new Performance(req.body);
        await performance.save();
        res.status(201).json(performance);
    } catch (error){
        res.status(500).json({ message: 'Error creating performance data'});
    }
}

// Budget Controller
export const getBudgetData = async (req: Request, res: Response) => {
    try{
        const budget= await Budget.find().sort({ month: -1});
        res.json(budget);
    } catch(error){
        res.status(500).json({ message: 'Error fetching budget data'});
    }
};

export const createBudgetData = async (req: Request, res: Response) => {
    try{
        const budget = new Budget(req.body);
        await budget.save();
        res.status(201).json(budget);
    } catch (error){
        res.status(500).json({ message: 'Error creating budget data'});
    }
};