import Tasks from '../../models/Tasks';
import { Request, Response, NextFunction } from 'express';

export const allTasks = async (_: Request, res: Response, next: NextFunction) => {
    try {
        let tasks: any = await Tasks.find({})
        tasks = tasks.map((task) => { return { id: task._id, title: task.title, description: task.description }})
        res.json(tasks)
    } catch (error) {
        res.status(500)
        res.end()
        console.error(error)
    }
}