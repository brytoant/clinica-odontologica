
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const pacienteRoutes = require('./routes/paciente');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API da Clínica Odontológica funcionando!'
    });
});

app.use('/paciente', pacienteRoutes);

module.exports = app;
