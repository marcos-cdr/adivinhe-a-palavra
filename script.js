const palavras = [['QUEIXO', 'ÁGUA', 'PÊSSEGO'], ['Parte do corpo', 'Bebida', 'Fruta']];
let random = Math.floor(Math.random() * 3);
let chances = 5;
var acertos = 0;
let entradaLetra = document.querySelector('#tentativa')

var palavraAtual = palavras[0][random];
document.querySelector('#dica').innerHTML = `${palavras[1][random]}`

for(i=0; i<palavraAtual.length; i++){
    let tag = document.createElement('label');
    tag.setAttribute('id', `label-${i}`)
    let text = document.createTextNode('_');
    tag.appendChild(text);
    let element = document.querySelector('#palavra')
    element.appendChild(tag);
}

function tentativa(valorTecla, valorTeclaAcento, valorTeclaAcento2){
    let button = document.querySelector(`#${valorTecla}`);
    let resultado = document.querySelector('#resultado');
    let resetBtn = document.querySelector('#reset');
    button.style.color = "white";
    button.disabled = true;
    var erros = 0;
    let tentativa = valorTecla;
    for(i=0;i<palavraAtual.length;i++){
        if(palavraAtual[i] == tentativa || (palavraAtual[i] == valorTeclaAcento || palavraAtual[i] == valorTeclaAcento2)){
            button.style.backgroundColor = "green";
            document.querySelector(`#label-${i}`).innerHTML = palavraAtual[i];
            acertos += 1;
            if(acertos == palavraAtual.length){
                resultado.innerHTML = 'Você venceu!';
                resultado.style.color = "green";
                resetBtn.style.display = 'block';
                document.querySelector('#teclado').style.display = "none";
            }
        }
        else{
            erros +=1;
            if(erros == palavraAtual.length){
                button.style.backgroundColor = "red";
                chances-=1;
                document.querySelector('#chances').innerHTML = `Chances: ${chances}`;
                if(chances == 0){
                    for(i=0;i<palavraAtual.length;i++){
                        document.querySelector(`#label-${i}`).innerHTML = palavraAtual[i];
                    }
                    resultado.innerHTML = 'Você perdeu!';
                    resultado.style.color = "red";
                    resetBtn.style.display = 'block';
                    document.querySelector('#teclado').style.display = "none";
                }
            }
        }
    }
}