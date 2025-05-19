import express from 'express'
import { PORT } from './config/env';
import router from './routes';
import loggerMiddleware, { log } from './utils/logger.util';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.use(router);
app.listen(PORT, () =>{
    log.info(`Server is running on port http://localhost:${PORT}`);
})