import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
    category: { type: String, required: true},
    planned: { type: Number, required: true},
    actual: { type: Number, required: true},
    month: { type: Date, required: true},
}, {timestamps: true});

export default mongoose.model('Budget', budgetSchema);


