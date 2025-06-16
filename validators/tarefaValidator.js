const Joi = require('joi');

const tarefaSchema = Joi.object({
  nome: Joi.string().min(2).max(100).required(),
  descricao: Joi.string().min(2).max(500).required(),
  status: Joi.string().valid('pendente', 'concluida').optional()
});

module.exports = { tarefaSchema };