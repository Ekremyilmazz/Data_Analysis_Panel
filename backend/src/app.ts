import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import visualizationRoutes from './routes/visualizationRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/visualization', visualizationRoutes);

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});
