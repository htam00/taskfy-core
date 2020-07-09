import { Router } from 'express';
import { homepage } from '../controllers/app/index';
import { addTask, deleteTask } from '../controllers/tasks/addTask';
import { allTasks } from '../controllers/tasks/allTasks';
import { oneTask } from '../controllers/tasks/getTask';

const router: any = Router();

router.get('/', homepage)
    .get('/api/v1/tasks', allTasks)
    .get('/api/v1/tasks/:id', oneTask)
    .post('/api/v1/tasks', addTask)
    .delete('/api/v1/tasks/:id', deleteTask)

export default router;