// parte do cpf
const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', () => {
  let value = cpfInput.value;


  value = value.replace(/\D/g, '');


  if (value.length > 3) value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  if (value.length > 7) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  if (value.length > 11) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');


  cpfInput.value = value.slice(0, 14);
});


// parte de marcar termos
const checkDiv = document.querySelector('.check__p__icone');

checkDiv.addEventListener('click', () => {
  checkDiv.classList.toggle('active');
});



// PARTE DO ARMAZENAMENTO TEMPORARIO E REDIRECIONAMENTO PARA PAGINA DE LOGIN :P

const form = document.getElementById('cadastro');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      const nome = document.getElementById('nome').value;
      const senha = document.getElementById('senha').value;

      // Armazenar no localStorage
      localStorage.setItem('usuario_nome', nome);
      localStorage.setItem('usuario_senha', senha);

      // Redirecionar
      window.location.href = "about.html";
    } else {
      form.reportValidity();
    }
  });

  // ALERTA DE INSCRICAO REALIZADA
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastro");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Inscrição realizada com sucesso!");
        
    });
});