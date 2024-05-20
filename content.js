// content.js

// Função para otimizar as imagens no site específico
function optimizeImages() {
  // Obter todas as imagens da página
  const images = document.querySelectorAll('img');

  // Percorrer todas as imagens
  images.forEach(image => {
      // Verificar se a imagem pertence ao domínio https://dol.com.br/?d=1
      const src = image.getAttribute('src');
      if (src && src.includes('dol.com.br')) {
          // Aqui, podemos usar uma abordagem para otimizar a imagem:
          // Por exemplo, diminuir a resolução ou trocar para um formato mais eficiente (como WebP)
          const optimizedSrc = src.replace('.png', '.webp'); // Exemplo de conversão de PNG para WebP

          // Configurar o atributo src para a imagem otimizada
          image.setAttribute('src', optimizedSrc);
      }
  });
}

// Função para ativar o modo de economia de energia
function enableEnergySavingMode() {
  document.body.style.backgroundColor = '#222';
  document.body.style.color = '#fff';
  // Diminuir brilho da tela
  document.body.style.filter = 'brightness(0.8)';
}

// Função para otimizar o site
function optimizeSite() {
  // Otimizar imagens
  optimizeImages();
  
  
 

  // Ativar o modo de economia de energia
  enableEnergySavingMode();
}

// Chamar a função de otimização quando a página for carregada
window.addEventListener('load', optimizeSite);
