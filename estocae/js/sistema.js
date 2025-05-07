function adicionarEmail() {
    const campoEmail = document.getElementById('email');
    const email = campoEmail.value.trim();
    if (!email) return;
  
    const lista = document.getElementById('lista-emails');
  
    const item = document.createElement('div');
    item.className = 'item-email';
  
    const span = document.createElement('span');
    span.textContent = email;
  
    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'botao-remover';
    botaoRemover.textContent = '×';
    botaoRemover.onclick = () => lista.removeChild(item);
  
    item.appendChild(span);
    item.appendChild(botaoRemover);
    lista.appendChild(item);
  
    campoEmail.value = '';
  }
  