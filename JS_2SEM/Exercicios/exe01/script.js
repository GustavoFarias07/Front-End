var informacoes = document.querySelector(".progress");
informacoes.style.display = "none";

function animainformacoes() {

}

function botaoEnviar() {
    var nome = document.getElementById("nomeInformcao").value
    var idade = document.getElementById("idadeInformacao").value
    var cidade = document.getElementById("cidadeInformacao").value
    var Mostrar = document.getElementById("mostrar")

    if (nome == "" || cidade == "" || idade == "") {
        Mostrar.innerHTML = `
        <div class="alert alert-danger fade show mt-3" role="alert">
       
        <span> Preencha todos os campos corretamente</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

        </div>
    `
        return
    } else if( idade <= 0 || idade > 100){
        Mostrar.innerHTML = `
        <div class="alert alert-danger fade show mt-3" role="alert">
       
        <span> Idade Inválida</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        
        </div>
    ` 
    return     
    }

    var progresso = 0;
    var barra = document.querySelector(".progress-bar")
    informacoes.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            //limpar valor variavel
            clearInterval(intervalo);
            informacoes.style.display = "none";
            Mostrar.innerHTML = `
        <div class="alert alert-success fade show mt-3" role="alert">
       
        <span> Informações: seu nome é ${nome}      tem ${idade} anos e mora na cidade de ${cidade} </span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>

        </div>
    `

        }
        else {
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++; //incrementa na variavel progress
            barra.style.width = progresso + "%";
        }
    }, 50);
}
