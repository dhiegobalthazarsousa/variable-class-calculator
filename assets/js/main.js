function apresentarResultado(resultado){
    resultado = String(resultado.toFixed(2)).replace(".",",");
    const resultContainer = document.querySelector(".result-container");
    const title = document.createElement("h2");
    title.textContent = `Resultado dos investimentos`;
    const totalJuros = document.createElement("p");
    totalJuros.textContent = `Total com juros: R$ ${resultado}`;
    totalJuros.classList.add("total-juros");
    resultContainer.appendChild(title);
    resultContainer.appendChild(totalJuros);
}

const BTN_CALCULAR = document.querySelector("#calcular");

BTN_CALCULAR.addEventListener("click", (event) => {
    event.preventDefault();
    //Altere a partir daqui
    const INPUT_VALOR_INICIAL = document.getElementById("valor-inicial");
    const INPUT_APORTE = document.getElementById("aporte");
    const INPUT_TAXA_MENSAL = document.getElementById("taxa-mensal");
    const INPUT_TEMPO = document.getElementById("tempo");

    let valorInicial = Number(INPUT_VALOR_INICIAL.value);
    let aporte = Number(INPUT_APORTE.value);
    let taxaMensal = Number(INPUT_TAXA_MENSAL.value);
    let tempo = Number(INPUT_TEMPO.value);

    let resultado = (valorInicial*(1+taxaMensal/100) ** tempo) + aporte * (tempo-1);
    //Não apague esta função
    apresentarResultado(resultado);
});