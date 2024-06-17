// Função para formatar o número de telefone
  function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos do número de telefone
    var cleaned = ('' + input.value).replace(/\D/g, '');
    
    // Formatar o número de telefone conforme necessário
    var match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      // Se o número for válido, formate-o como (XX) XXXXX-XXXX
      input.value = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    } else {
      // Caso contrário, mantenha o valor original
      input.value = cleaned;
    }
  }

  // Adicione um ouvinte de evento ao campo de telefone para formatar o número conforme necessário
  document.getElementById('telefone').addEventListener('input', function() {
    formatarTelefone(this);
  });

