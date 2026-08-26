// ==============================
// ACESSIBILIDADE
// ==============================

let tamanhoFonte = 100;

function aumentarFonte() {

    if (tamanhoFonte < 130) {
        tamanhoFonte += 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }

}


function diminuirFonte() {

    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }

}


function altoContraste() {

    document.body.classList.toggle("alto-contraste");

}


// ==============================
// CALCULADORA DE ENERGIA
// ==============================

function calcularEnergia() {

    const potencia = Number(document.getElementById("potencia").value);
    const tempo = Number(document.getElementById("tempo").value);

    const resultado = document.getElementById("resultado");


    if (potencia <= 0 || tempo <= 0) {

        resultado.textContent =
            "⚠️ Digite valores maiores que zero.";

        return;
    }


    // Converte minutos para horas
    const horas = tempo / 60;


    // Calcula o consumo em kWh por dia
    const consumo = (potencia * horas) / 1000;


    // Estimativa mensal considerando 30 dias
    const consumoMensal = consumo * 30;


    resultado.innerHTML =
        "⚡ Consumo estimado: " +
        consumo.toFixed(2) +
        " kWh por dia.<br><br>" +

        "📅 Em 30 dias: aproximadamente " +
        consumoMensal.toFixed(2) +
        " kWh.";
}


// ==============================
// QUIZ
// ==============================

function responderQuiz(correto) {

    const resposta = document.getElementById("respostaQuiz");


    if (correto) {

        resposta.textContent =
            "✅ Correto! Economizar água e evitar desperdícios são atitudes sustentáveis.";

    } else {

        resposta.textContent =
            "❌ Essa não é a melhor opção. Tente pensar em uma atitude que reduza o desperdício.";

    }

}
