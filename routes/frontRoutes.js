const express = require('express');
const router = express.Router();
const path = require('path');
const TarefaController = require('../controllers/TarefaController');

// Roteamento para páginas dinâmicas
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Página Inicial',
    content: path.join(__dirname, '../views/pages/page1')
  });
});

router.get('/about', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Página Inicial',
    content: path.join(__dirname, '../views/pages/page2')
  });
});

router.get('/tarefas', async (req, res) => {
  try {
    const tarefas = await require('../models/Tarefa').listar();
    res.render(path.join(__dirname, '../views/layout/main'), {
      pageTitle: 'Lista de Tarefas',
      content: path.join(__dirname, '../views/tarefas'),
      tarefas,
      pageScript: '/js/tarefas.js' // Adicione esta linha
    });
  } catch (err) {
    res.status(500).send('Erro ao carregar tarefas');
  }
});

// Formulário para nova tarefa
router.get('/tarefas/novo', (req, res) => {
  res.render('formTarefa', { tarefa: null });
});

// Formulário para editar tarefa
router.get('/tarefas/:id/editar', async (req, res) => {
  const tarefa = await require('../models/Tarefa').buscarPorId(req.params.id);
  if (!tarefa) return res.status(404).send('Tarefa não encontrada');
  res.render('formTarefa', { tarefa });
});

// Adicione outras rotas conforme necessário

module.exports = router;
