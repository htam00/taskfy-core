import Tasks from '../../models/Tasks';
import { Request, Response, NextFunction } from 'express';

export const addTask = async (req: Request, res: Response, next: NextFunction) => {
    const title = req.body['title'];
    const description = req.body['description']
    const tasks = new Tasks({ title: title, description: description });
    await tasks.save((err, task) => !err ? res.json(task) : console.log(err));
    res.end();
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    const taskID: any = req.params.id
    await Tasks.findByIdAndDelete(taskID, (err: Error, deleted: any) => {
        if(err) {
            res.send(err)
        }
        const message = deleted ? 'delected success...' : 'failed delected (:'
        res.send(message)
    })
    res.end()
}

