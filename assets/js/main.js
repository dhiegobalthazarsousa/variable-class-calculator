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
    //M=(C(1+i)^t)+aporte*t-1

    //Altere a partir daqui
    const valorInicial = Number(document.querySelector("#valor-inicial").value).toFixed(2);
    const aporte = Number(document.querySelector("#aporte").value).toFixed(2);
    const taxaMensal = Number(document.querySelector("#taxa-mensal").value).toFixed(2);
    const tempo = Number(document.querySelector("#tempo").value).toFixed(2);

    let resultado = valorInicial*((1+taxaMensal/100)**tempo) + aporte*(tempo-1);
    
    
    
    //Não apague a linha abaixo
    apresentarResultado(resultado);
});