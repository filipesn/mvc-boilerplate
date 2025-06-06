// controllers/TarefaController.js
const Tarefa = require('../models/Tarefa');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.criar(req.body);
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.listar();
    res.status(200).json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.editar(req.params.id, req.body);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.excluir(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Renderizar lista de tarefas
exports.renderListaTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.listar();
    res.render('tarefas', { tarefas });
  } catch (err) {
    res.status(500).send('Erro ao carregar tarefas');
  }
};