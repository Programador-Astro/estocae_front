// Mostrar/ocultar senha
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);

        // Alternar ícone
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});

// Validação do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmacao = document.getElementById('confirmacao').value;

    if (senha !== confirmacao) {
        alert('As senhas não coincidem!');
        return;
    }

    if (senha.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres!');
        return;
    }

    // Se tudo estiver ok, pode enviar o formulário
    alert('Cadastro realizado com sucesso!');
    // this.submit(); // Descomente para enviar de verdade
});
