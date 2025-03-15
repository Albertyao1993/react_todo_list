import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import Task from '../models/Tasks';

const router = Router();

// Create task
router.post('/', async (req: Request, res: Response) => {
  try {
    const newTodo = await Task.create({
      title: req.body.title,
      completed: false,
    });
    return res.status(201).json(newTodo);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// Get all tasks
router.get('/', async (_: Request, res: Response) => {
  try {
    const getAllTasks = await Task.find({});
    return res.status(200).json(getAllTasks);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// Update task
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(updatedTask);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// Delete task
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(deletedTask);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;
