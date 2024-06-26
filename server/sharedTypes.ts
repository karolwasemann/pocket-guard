import {
  expenseSchema,
  insertExpensesSchema,
  insertSpentGoalSchema,
  selectExpensesSchema,
} from './db/schema/expenses';
import { z } from 'zod';

export const createExpenseSchema = insertExpensesSchema.omit({
  userId: true,
  createdAt: true,
  id: true,
});
export const createSpentGoalSchema = insertSpentGoalSchema.omit({
  userId: true,
  createdAt: true,
  id: true,
});

export type CreateExpense = z.infer<typeof createExpenseSchema>;
export type Expense = z.infer<typeof expenseSchema>;
