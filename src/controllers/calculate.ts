import { NextFunction, Request, Response } from 'express';
import { calculateData } from '../services/calculate';

async function post(req: Request, res: Response, next: NextFunction) {
    try {
        const { inputs } = req.body;
        const data = calculateData(inputs);
        res.status(200).send({ data });
    } catch (error) {
        next(error);
    }
}

export { post };
