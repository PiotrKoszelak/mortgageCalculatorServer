import request from 'supertest';
import express from 'express';
import router from '../../../src/routes/calculate';
import { errorHandler } from '../../../src/middlewares/error';
import { mockedData } from '../mockedData';

const app = express();
app.use(express.json());
app.use('/calculate', router);
app.use(errorHandler);

describe('Post', () => {
    test('Proper request', async () => {
        const res = await request(app)
            .post('/calculate')
            .send(mockedData.input);
        expect(res.header['content-type']).toBe(
            'application/json; charset=utf-8'
        );
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(mockedData.output);
    });

    test('Server issue', async () => {
        const res = await request(app).post('/calculate').send({});
        expect(res.statusCode).toBe(500);
    });
});
