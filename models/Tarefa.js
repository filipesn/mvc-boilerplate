const pool = require('../config/db');

class Tarefa {
  static async criar({ nome, descricao }) {
    const query = 'INSERT INTO tarefas (nome, descricao) VALUES ($1, $2) RETURNING *';
    const values = [nome, descricao];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async listar() {
    const query = 'SELECT * FROM tarefas ORDER BY id DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async editar(id, { nome, descricao, status }) {
    const query = `
      UPDATE tarefas SET nome = $1, descricao = $2, status = $3, updated_at = CURRENT_TIMESTAMP
      WHERE id = $4 RETURNING *`;
    const values = [nome, descricao, status, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async excluir(id) {
    const query = 'DELETE FROM tarefas WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async buscarPorId(id) {
    const query = 'SELECT * FROM tarefas WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Tarefa;