let listaDeNumerosSorteados = [];
let numerosMaximos = 50;
let numeroSecreto = "";
let tentativas = "";

function textoExibidoNaTela(tag, texto) {
  let titulo = document.querySelector(tag);
  titulo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function modeloJogoInicial() {
  numeroSecreto = gerarNumeroAleatorio();
  textoExibidoNaTela("h1", "Brito Game Secret Number");
  textoExibidoNaTela("p", `Escolha um numero de 1 a ${numerosMaximos}`);
  tentativas = 1;
}

modeloJogoInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemDeTentativas = `Você acertou essa porra com ${tentativas} ${palavraTentativas}`;
    textoExibidoNaTela("h1", `BOA KARALHO`);
    textoExibidoNaTela("p", mensagemDeTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute < numeroSecreto) {
      textoExibidoNaTela("p", "The Secrete Number é maior");
    } else if (chute > numeroSecreto && chute <= numerosMaximos) {
      textoExibidoNaTela("p", "The Secrete Number é menor");
    } else {
      textoExibidoNaTela(
        "p",
        `Burro pra karalho, o numero é até ${numerosMaximos}`
      );
    }
    tentativas++;
    limparCampoDeTexto();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeElementosNaList = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaList == 2) {
    listaDeNumerosSorteados.shift();
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else listaDeNumerosSorteados.push(numeroEscolhido);
  console.log(listaDeNumerosSorteados);
  return numeroEscolhido;
}

function exibirMensagemNoConsole() {
  console.log("O Botão foi clicado");
}
function limparCampoDeTexto() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  modeloJogoInicial();
  limparCampoDeTexto();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
