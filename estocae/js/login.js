// Mostrar modal quando clicar em "Esqueceu a senha?"
document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('forgotPasswordModal').style.display = 'flex';
});

// Fechar modal ao clicar em Cancelar
document.getElementById('cancelRecovery').addEventListener('click', function() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
});

// Enviar e-mail de recuperação
document.getElementById('sendRecovery').addEventListener('click', function() {
    const email = document.getElementById('recoveryEmail').value;
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }
    
    alert('Um e-mail com as instruções foi enviado para: ' + email);
    document.getElementById('forgotPasswordModal').style.display = 'none';
    
    document.getElementById('recoveryEmail').value = '';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('forgotPasswordModal')) {
        document.getElementById('forgotPasswordModal').style.display = 'none';
    }
});
