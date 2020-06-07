import express from 'express';
import cors from 'cors'
import routes from './routes';
import path from 'path';
import {errors} from 'celebrate'

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.use(errors())

app.listen(3333);
//resquest: dados sobre nossa requisicao EX: NOME EMAIL SENHA DATA...
//response: devolver resposta para o browser ou qlq outra aplicacao