// Cria as variáveis linkando com o HTML, através do getElementById

const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");

// Cria as variáveis com a quantidade de capítulos, se está tocando, e o capítulo (que no HTML é o incial). Const quando a variável é fixa e Let quando a variável pode ser atualizada.
const quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

// Foi criada função do botão Play (O botão exibido é o PLAY, ao clicar, ele remove o PLAY e adiciona o PAUSE), audio.play() é a função que inicia o áudio e altera a variável
// taTocando de false para true.
function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audio.play();
    taTocando = true;
}

// Foi criada função do botão Pause (O botão exibido nesse caso é o PAUSE, ao clicar, ele remove o PAUSE e adiciona o PLAY), audio.pause() é a função que pausa o áudio e altera a variável
// taTocando de true para false.
function pausarFaixa() {
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
    audio.pause();
    taTocando = false;
}

// Essa função foi criada para dar o comando de tocar ou pausar a faixa, note que acima foram criadas funções para a alteração dos botões e as funcionalidades dos mesmos, sendo assim
// as funções conversam entre si, observe que pausarFaixa() é uma função já criada, e tocarFaixa() também, ou seja, a função tocarOuPausarFaixa() 
// é uma função PAI que distribui os comandos para as outras funções.
function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

// Essa função se comunica com o botão VOLTAR, o IF usa como função SÊ, ou seja SE capítulo for igual a 1 ela irá atribuir esse valor para a quantidade de capítulos, ou seja,
// voltará para a variável definida no começo do código que é a 10, sendo assim, ela voltará para o capítulo 10. SE for false, ou, ELSE, ela irá subtrair, Ex.: Está ouvindo
// O capitulo 2, irá voltar ao 1. E abaixo ela irá buscar o Nº do capítulo nos arquivos disponíveis, e automaticamente atualizará a FAIXA EXIBIDA NA TELA DO PLAYER.
function capituloAnterior() {
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();  
}

// Basicamente a mesma finalidade da função anterior, porém o inverso. Nesse caso SE a quantidade de Capitulos que é 10, for menor que o capitulo atual, soma-se 1. SE falso, ou ELSE,
// se o CAPITULO for igual a 10 ele irá voltar ao capítulo 1. Note que todos esses comandos tem a função tocarFaixa(), ou seja, elas se conversam entre si.
function proximoCapitulo(){
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

// E aqui são os eventos, ao clicar em algo, o JS irá acionar as funções acima.
botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoAnterior.addEventListener("click", capituloAnterior);
botaoProximo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);