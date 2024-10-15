import express from 'express';
import 'dotenv/config';

// Project dependencies
import router from './src/routes/chat';
import { errorHandler } from './src/middlewares/error';
import { statusHandler } from './src/middlewares/status';

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', `${process.env.CLIENT_URL}`);
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Routes
app.use('/chat', router);

app.use('/status', statusHandler);

// Error handling
app.use(errorHandler);
