// criando um servidor http
import express from 'express';
import beareAthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
import jwteAthenticationMiddleware from './middlewares/jwt-authentication.middleware';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwteAthenticationMiddleware);
app.use(usersRoute);


// Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});