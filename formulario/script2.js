
const form = document.getElementById('cadastro');


  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeDigitado = document.getElementById('loginNome').value;
    const senhaDigitada = document.getElementById('loginSenha').value;

    const nomeArmazenado = localStorage.getItem('usuario_nome');
    const senhaArmazenada = localStorage.getItem('usuario_senha');

    if (nomeDigitado === nomeArmazenado && senhaDigitada === senhaArmazenada) {
      alert("Login realizado com sucesso!");
      // Redirecionar ou seguir com login
    } else {
      alert("Nome ou senha incorretos, tente novamente, ou clique em cadastrar.");
    }
  });