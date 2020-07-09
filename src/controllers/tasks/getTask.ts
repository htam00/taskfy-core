import Tasks from '../../models/Tasks';
import { Request, Response, NextFunction } from 'express';

export const oneTask = async (req: Request, res: Response,  next: NextFunction) => {
    const id: any = req.params.id
    await Tasks.findById(id, (err, task) => !err ? res.json(task) : console.error(err))
    res.end();
}