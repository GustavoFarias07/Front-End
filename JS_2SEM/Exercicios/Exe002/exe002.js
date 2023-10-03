const paisSelecionado = document.querySelector("#paisSelecionado");
const exibirPais = document.querySelector("#exibirPais");

const informacoesPaises = {
 
    Brasil: {
        nome: "Brasil",
        capital: "Brasília",
        população: "209 milhões",
        idioma: "Português"
    },

    EUA: {
        nome: "Estados Unidos",
        capital: "Washington, D.C",
        população: "331 milhões",
        idioma: "Inglês"
    },

    Japao: {
        nome: "Japão",
        capital: "Tóquio",
        população: "125,7 milhões",
        idioma: "Japonês"
    },

    canada: {
        nome: "Canada",
        capital: "Ottawa",
        população: "38,25 milhões ",
        idioma: "Inglês"
    },
 
}

function atualizarInformacoesPaises()
{

    const paisSelecionadoValor = paisSelecionado.value;
    if (paisSelecionadoValor == "") {
        exibirPais.textContent = ` `;
    } else 
    {
        exibirPais.textContent = ` Nome: ${informacoesPaises[paisSelecionadoValor].nome}, Capital: ${informacoesPaises[paisSelecionadoValor].capital}, População: ${informacoesPaises[paisSelecionadoValor].população}, Idioma: ${informacoesPaises[paisSelecionadoValor].idioma }`;
    }
    
}


paisSelecionado.addEventListener("change", atualizarInformacoesPaises)