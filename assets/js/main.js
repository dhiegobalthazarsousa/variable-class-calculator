function apresentarResultado(resultado){
    resultado = String(resultado.toFixed(2)).replace(".",",");
    const resultContainer = document.querySelector(".result-container");
    const title = document.createElement("h2");
    title.textContent = `Resultado dos investimentos`;
    const totalJuros = document.createElement("p");totalJuros.textContent = `Total com juros: R$ ${resultado}`;
    totalJuros.classList.add("total-juros");
    resultContainer.appendChild(title);
    resultContainer.appendChild(totalJuros);
}

const btnCalcular = document.querySelector("#calcular");
btnCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    //Altere a partir daqui
    
    //Não apague esta função
    apresentarResultado(resultado);
});