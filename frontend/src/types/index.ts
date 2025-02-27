export interface IKPI {
    _id: string;
    name: string;
    value: number;
    target: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
    date: Date;
}

export interface IPerformance {
    _id: string;
    department: string;
    efficiency: number;
    date: Date;
}

export interface IBudget {
    _id: string;
    category: string;
    planned: number;
    actual: number;
    month: Date;
}
