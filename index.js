// Aguarda o HTML carregar completamente antes de rodar o código
document.addEventListener('DOMContentLoaded', function() {
  
  const botao = document.getElementById('btnFinalizar');
  const caixaFormulario = document.getElementById('caixaFormulario');
  const caixaSucesso = document.getElementById('caixaSucesso');
  const nomeTreinador = document.getElementById('nomeTreinador');
  const campoNome = document.getElementById('nome-cliente');

  // Adiciona o evento de clique direto no botão
  botao.addEventListener('click', function() {
    // Pega o valor do input de nome
    const nomeDigitado = campoNome.value.trim();
    
    // Altera o texto do nome na tela de sucesso
    nomeTreinador.textContent = nomeDigitado ? nomeDigitado : "Treinador";
    
    // Remove o formulário e exibe o sucesso na hora
    caixaFormulario.classList.add('escondido');
    caixaSucesso.classList.remove('escondido');
  });

});
