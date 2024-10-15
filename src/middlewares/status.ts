import { NextFunction, Request, Response } from 'express';

export const statusHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        res.status(200).send({ status: 'running' });
    } catch (error) {
        next(error);
    }
};
