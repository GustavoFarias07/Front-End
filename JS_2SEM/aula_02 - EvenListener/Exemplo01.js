//Selecoionando o botao pelo ID
const botao = document.querySelector("#botao");
const botao2 = document.querySelector("#botao2");
const zerar = document.querySelector("#zerar");
const contadorElemento = document.querySelector("#contador");

//Inicializando contador
let contador = 0;

//função que sera chamada quando o botao foi clicado
function aumentarContador() {
    contador++;
    contadorElemento.textContent = contador;
}
function diminuirContador() {
    
    if (contador <= 0) {

        document.querySelector("#mostrar").innerHTML = 
        `<div class="d-flex justify-content-center mt-3 ">
        <div class="alert alert-danger fade show" role="alert">
        <div class="d-flex justify-content-center">
            <span class="bi bi-exclamation-triangle-fill"> O número não pode ser menor que zero</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
         </div>
         </div>
        `
        return
    } else {
        contador--;
    }

    contadorElemento.textContent = contador;

}
function zerarContador() {
    contador = 0;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento para Clique do botão

botao.addEventListener("click", aumentarContador);
botao2.addEventListener("click", diminuirContador);
zerar.addEventListener("click", zerarContador);