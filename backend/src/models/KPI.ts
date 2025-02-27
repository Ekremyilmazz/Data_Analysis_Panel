import mongoose from 'mongoose';

const kpiSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, required: true},
    target: { type: Number, required: true},
    unit: { type: String, required: true},
    trend: { type: String, required: true},
    date: { type: Date, default: Date.now},
}, {timestamps: true});

export default mongoose.model('KPI', kpiSchema);


