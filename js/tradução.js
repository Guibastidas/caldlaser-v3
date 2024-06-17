
  // Adiciona o evento de clique aos botões
  document.getElementById('translate-to-english').addEventListener('click', function() {
    translatePage('en');
  });

  document.getElementById('translate-to-portuguese').addEventListener('click', function() {
    translatePage('pt');
  });

  document.getElementById('translate-to-spanish').addEventListener('click', function() {
    translatePage('es');
  });

  function translatePage(targetLanguage) {
    var elementsToTranslate = document.querySelectorAll('[data-traduzir]');
    
    elementsToTranslate.forEach(function(element) {
      var originalText = element.innerHTML.trim();

      // Chama a função de tradução
      translateText(originalText, targetLanguage)
        .then(function(translation) {
          element.innerHTML = translation;
        })
        .catch(function(error) {
          console.error('Erro na tradução:', error);
        });
    });
  }

  // Função para traduzir texto usando a API do Google Translate
  function translateText(text, targetLanguage) {
    // Substitua 'YOUR_GOOGLE_TRANSLATE_API_KEY' pela sua chave de API do Google Translate
    var apiKey = 'AIzaSyDBgc0A832KFyjnzHhFOOsDI2BLgkoLiKk';
    var apiUrl = 'https://translation.googleapis.com/language/translate/v2?key=' + apiKey;

    return new Promise(function(resolve, reject) {
      // Requisição para a API do Google Translate
      var xhr = new XMLHttpRequest();
      xhr.open('POST', apiUrl);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = function() {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response && response.data && response.data.translations && response.data.translations.length > 0) {
            resolve(response.data.translations[0].translatedText);
          } else {
            reject('Erro na resposta da API de tradução.');
          }
        } else {
          reject('Erro ao chamar a API de tradução. Código de status: ' + xhr.status);
        }
      };

      xhr.onerror = function() {
        reject('Erro de rede ao chamar a API de tradução.');
      };

      // Constrói o corpo da requisição
      var requestBody = {
        q: text,
        target: targetLanguage
      };

      xhr.send(JSON.stringify(requestBody));
    });
  }

