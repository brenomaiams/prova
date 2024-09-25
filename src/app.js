// src/app.ts
import express from 'express';
const app = express();
// Configurações do seu aplicativo, rotas, etc.
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Exportando o app
export { app }; // Certifique-se de que você está usando a exportação nomeada
