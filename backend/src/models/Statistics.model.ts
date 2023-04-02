import { Model, Schema, model, Document } from 'mongoose';
import { IStatistics } from '@/types/interfaces';

interface IStatisticsModel extends Model<IStatistics> {}

const schema = new Schema<IStatistics>(
  {
    totalExpenses: { type: String, required: true },
    totalRevenue: { type: String, required: true },
    totalProfit: { type: String, required: true },
    dailyData: [
      {
        date: { type: Date, required: true },
        expenses: { type: String, required: true },
        revenue: { type: String, required: true }
      }
    ],
    monthlyData: [
      {
        month: { type: String, required: true },
        revenue: { type: String, required: true },
        expenses: { type: String, required: true },
        operationalExpenses: { type: String, required: true },
        nonOperationalExpenses: { type: String, required: true }
      }
    ],
    expensesByCategory: [
      {
        salaries: { type: String, required: true },
        supplies: { type: String, required: true },
        services: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

const Statistics = model<IStatistics, IStatisticsModel>('statistics', schema);

export default Statistics;
