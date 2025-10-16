// Validação do formulário de cadastro
document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.getElementById("cadastroForm");
  const loginForm = document.getElementById("loginForm");

  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const senha = document.getElementById("senha").value;
      const confirmar = document.getElementById("confirmar").value;

      if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
      }

      // Simula cadastro e redireciona
      window.location.href = "curriculo.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simula login e redireciona
      window.location.href = "curriculo.html";
    });
  }
});
