//Atribuir valor dos elementos para a variavel
const Selecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirCor");

//Funçao para atualizar a cor exibida, quando alterar a seleção
function atualizarCor()
{
    const corSelecionadaValor = corSelecionada.value;
    exibirCor.textContent = `Cor Selecionada; ${corSelecionada.value}`;
    exibirCor.style.color = corSelecionadaValor;
}

//Adicionanda um ouvinte de evento change ao select

corSelecionada.addEventListener("change", atualizarCor)