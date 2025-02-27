import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
    department: { type: String, required: true},
    efficiency: { type: Number, required: true},
    date: { type: Date, default: Date.now},
}, {timestamps: true});

export default mongoose.model('Performance', performanceSchema);


