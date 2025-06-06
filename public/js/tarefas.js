document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-tarefa');
  const lista = document.getElementById('lista-tarefas');
  let editandoId = null;


  // Carregar tarefas
  function carregarTarefas() {
    fetch('/api/tarefas')
      .then(res => res.json())
      .then(tarefas => {
        lista.innerHTML = '';
        tarefas.forEach(tarefa => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>${tarefa.nome}</strong> - ${tarefa.descricao}
            <button data-id="${tarefa.id}" class="editar">Editar</button>
            <button data-id="${tarefa.id}" class="excluir">Excluir</button>
          `;
          lista.appendChild(li);
        });
      });
  }

  // Adicionar tarefa
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = form.nome.value;
      const descricao = form.descricao.value;

      if (editandoId) {
        // Edição
        fetch(`/api/tarefas/${editandoId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, descricao })
        }).then(() => {
          form.reset();
          editandoId = null;
          form.querySelector('button[type="submit"]').textContent = 'Adicionar';
          carregarTarefas();
        });
      } else {
        // Criação
        fetch('/api/tarefas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, descricao })
        }).then(() => {
          form.reset();
          carregarTarefas();
        });
      }
    });
  }

  // Delegação para editar/excluir
  if (lista) {
    lista.addEventListener('click', e => {
      if (e.target.classList.contains('excluir')) {
        const id = e.target.dataset.id;
        fetch(`/api/tarefas/${id}`, { method: 'DELETE' })
          .then(() => carregarTarefas());
      }
      if (e.target.classList.contains('editar')) {
        const id = e.target.dataset.id;
        // Busca tarefa para preencher o formulário
        fetch(`/api/tarefas`)
          .then(res => res.json())
          .then(tarefas => {
            const tarefa = tarefas.find(t => t.id == id);
            if (tarefa) {
              form.nome.value = tarefa.nome;
              form.descricao.value = tarefa.descricao;
              editandoId = tarefa.id;
              form.querySelector('button[type="submit"]').textContent = 'Salvar';
            }
          });
      }
    });
  }

  if (lista) carregarTarefas();
});