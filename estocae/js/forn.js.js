document.addEventListener('DOMContentLoaded', function() {
    // Máscara para CNPJ
    new Cleave('#cnpj', {
        delimiters: ['.', '.', '/', '-'],
        blocks: [2, 3, 3, 4, 2],
        numericOnly: true
    });

    // Máscara para data
    new Cleave('#date', {
        date: true,
        datePattern: ['d', 'm', 'Y'],
        delimiter: '/'
    });

    // Máscara para telefone
    new Cleave('#phone', {
        phone: true,
        phoneRegionCode: 'BR'
    });

    // Controle do Status
    const statusToggle = document.getElementById('statusToggle');
    const statusText = document.getElementById('statusText');
    const statusIcon = document.getElementById('statusIcon');
    
    // Atualiza o status inicial
    updateStatus(statusToggle.checked);
    
    // Adiciona listener para mudanças
    statusToggle.addEventListener('change', function() {
        updateStatus(this.checked);
    });
    
    function updateStatus(isActive) {
        if(isActive) {
            // Status Ativo (Verde)
            statusText.textContent = 'Ativo';
            statusText.className = 'status-label status-active';
            statusIcon.style.color = '#4CAF50';
        } else {
            // Status Inativo (Vermelho)
            statusText.textContent = 'Inativo';
            statusText.className = 'status-label status-inactive';
            statusIcon.style.color = '#F44336';
        }
    }
});