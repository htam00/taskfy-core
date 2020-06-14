import { Request, Response } from 'express';

export const homepage = (_: Request, res: Response): any => {
    res.send('Hello World!!!');
}