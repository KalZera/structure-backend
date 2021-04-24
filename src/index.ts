import express from 'express';
import morgan from 'morgan';

import todoRouter from './modules/todo/routes';

const app = express();

// ===== middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

// ===== routes 
app.get('/healthcheck', (req, res) => {
   res.send("it's ok");
});

app.use('/todo', todoRouter);

// ===== start server
app.listen(3000, () => {
   console.log('server listen port 3000');
});