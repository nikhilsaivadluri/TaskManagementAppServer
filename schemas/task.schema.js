const { z } = require('zod');

exports.createTaskSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    dueDate: z.string(),
    completed: z.boolean().optional(),
});

exports.updateTaskSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    dueDate: z.string(),
    completed: z.boolean().optional(),
});