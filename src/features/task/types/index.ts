import { z } from 'zod';

export enum Status {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}
export type Task = {
  _id?: string;
  name: string;
  description?: string;
  status: Status;
};

export const createTaskSchema = z.object({
  name: z
    .string({ required_error: 'Nome de task é obrigatório' })
    .min(2, 'Nome de task é obrigatório'),
  description: z.string().optional(),
  status: z
    .enum(['PENDING', 'IN_PROGRESS', 'COMPLETED'], {
      invalid_type_error: 'Status Inválido',
    })
    .optional(),
});

export type CreateTaskType = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  id: z.string().optional(),
  name: z
    .string({ required_error: 'Nome de task é obrigatório' })
    .min(2, 'Nome de task é obrigatório'),
  description: z.string().optional(),
  status: z
    .enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED'], {
      invalid_type_error: 'Status Inválido',
    })
    .optional(),
});

export type UpdateTaskType = z.infer<typeof updateTaskSchema>;
