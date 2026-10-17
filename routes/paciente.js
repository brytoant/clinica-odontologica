
const express = require('express');
const router = express.Router();
const connection = require('../config/database');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM paciente', (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao listar pacientes' });
        }

        res.status(200).json(resultados);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    connection.query('SELECT * FROM paciente WHERE id = ?', [id], (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar paciente' });
        }

        if (resultados.length === 0) {
            return res.status(404).json({ erro: 'Paciente não encontrado' });
        }

        res.status(200).json(resultados[0]);
    });
});

router.post('/', (req, res) => {
    const { nome, telefone, procedimento } = req.body;

    if (!nome || !telefone || !procedimento) {
        return res.status(400).json({ erro: 'Informe nome, telefone e procedimento' });
    }

    connection.query(
        'INSERT INTO paciente (nome, telefone, procedimento) VALUES (?, ?, ?)',
        [nome, telefone, procedimento],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json({ erro: 'Erro ao cadastrar paciente' });
            }

            res.status(201).json({
                mensagem: 'Paciente cadastrado com sucesso',
                id: resultado.insertId,
                nome,
                telefone,
                procedimento
            });
        }
    );
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, telefone, procedimento } = req.body;

    if (!nome || !telefone || !procedimento) {
        return res.status(400).json({ erro: 'Informe nome, telefone e procedimento' });
    }

    connection.query(
        'UPDATE paciente SET nome = ?, telefone = ?, procedimento = ? WHERE id = ?',
        [nome, telefone, procedimento, id],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json({ erro: 'Erro ao atualizar paciente' });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ erro: 'Paciente não encontrado' });
            }

            res.status(200).json({ mensagem: 'Paciente atualizado com sucesso' });
        }
    );
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    connection.query('DELETE FROM paciente WHERE id = ?', [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao excluir paciente' });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: 'Paciente não encontrado' });
        }

        res.status(200).json({ mensagem: 'Paciente excluído com sucesso' });
    });
});

module.exports = router;
