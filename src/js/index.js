/*
OBJETIVO 1: quando passar o mouse em cima do personagem temos que:

-colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação

-retirar a classe selecionado do personagem que está selecionado

OBJETIVO 2 -quando pasar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande

-alterar a imagem do jogador1
-alterar o nome do jogador1
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => { 
    personagem.addEventListener('mouseenter', () =>
    {
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado') 
        
        personagem.classList.add('selecionado')
        /*
        OBJETIVO 2 -quando pasar o mouse em cima do personagem da listagem, trocar a ima
        gem e nome do personagem grande

            -alterar a imagem do jogador1
            -alterar o nome do jogador1
        */

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src =`./src/imagens/${idSelecionado}.png`;
        /*MUITO IMPORTANTE, uso de crases ao invés de aspas
        */
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        //nomeJogador1.innerHTML = 'batata'

        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;

         

    });
});

