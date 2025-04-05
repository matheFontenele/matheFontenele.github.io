document.addEventListener("DOMContentLoaded", () => {
    fetch("projetos.json")
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("projetos-lista");
        data.forEach(projeto => {
          container.innerHTML += `
            <div class="projeto">
              <h3>${projeto.nome}</h3>
              <p>${projeto.descricao}</p>
              <a href="${projeto.link}" target="_blank">Ver projeto</a>
            </div>
          `;
        });
      });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
  
    form.addEventListener('submit', () => {
      const nome = document.getElementById('nome').value;
      const assunto = document.getElementById('assunto');
  
      // Define o nome como assunto do e-mail
      assunto.value = `Nova mensagem de ${nome}`;
    });
  });