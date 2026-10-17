
const connection = require('./config/database');

connection.query('SELECT 1 AS teste', (erro, resultados) => {
    if (erro) {
        console.log('Erro na conexão:', erro.message);
    } else {
        console.log('Conexão com MariaDB realizada com sucesso!');
        console.log(resultados);
    }

    connection.end();
});
