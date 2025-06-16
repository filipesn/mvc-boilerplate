CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS tarefas (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT NOT NULL,
  status TEXT DEFAULT 'pendente',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@email.com'),
  ('Bob', 'bob@email.com')
ON CONFLICT DO NOTHING;

INSERT INTO tarefas (nome, descricao, status) VALUES
  ('Primeira tarefa', 'Descrição da primeira tarefa', 'pendente'),
  ('Segunda tarefa', 'Descrição da segunda tarefa', 'concluida')
ON CONFLICT DO NOTHING;