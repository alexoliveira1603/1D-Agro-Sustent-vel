/* ==========================================
MISSÃO AGRO SUSTENTÁVEL 2026
SCRIPT.JS COMPLETO
========================================== */

/* =========================
MINI GAME
========================= */

let sustentabilidade = 0;
let producao = 0;
let economia = 0;

function atualizarGame() {
    document.getElementById("sustentabilidadeScore").innerText = sustentabilidade;
    document.getElementById("producaoScore").innerText = producao;
    document.getElementById("economiaScore").innerText = economia;
}

function plantar() {
    sustentabilidade += 2;
    producao += 1;
    mensagem("🌱 Plantio realizado com sucesso!");
    atualizarGame();
}

function irrigar() {
    sustentabilidade += 3;
    economia += 1;
    mensagem("💧 Irrigação eficiente aplicada!");
    atualizarGame();
}

function colher() {
    producao += 3;
    mensagem("🌾 Colheita realizada!");
    atualizarGame();
}

function vender() {
    economia += 3;
    mensagem("🏙️ Produto vendido para a cidade!");
    atualizarGame();
}

function mensagem(texto) {
    document.getElementById("gameMessage").innerText = texto;
}

/* =========================
QUIZ AGRINHO
========================= */

function corrigirQuiz() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const respostas = document.getElementsByName("q" + i);

        for (let r of respostas) {
            if (r.checked && r.value === "1") {
                score++;
            }
        }
    }

    document.getElementById("resultadoQuiz").innerHTML =
        `<h3>Você acertou ${score} de 10 perguntas 🌱</h3>`;
}

/* =========================
CALCULADORA DE ÁGUA
========================= */

function calcularAgua() {
    let area = parseFloat(document.getElementById("area").value);
    let tipo = parseFloat(document.getElementById("irrigacao").value);

    if (isNaN(area)) {
        document.getElementById("resultadoAgua").innerHTML =
            "Digite uma área válida.";
        return;
    }

    let consumo = area * tipo;

    document.getElementById("resultadoAgua").innerHTML =
        `💧 Consumo estimado de água: <strong>${consumo} litros</strong>`;
}

/* =========================
SIMULADOR CAMPO X CIDADE
========================= */

function simularCampo() {
    document.getElementById("resultadoSimulador").innerHTML =
        "🌾 Sem o campo: falta de alimentos, aumento de preços e crise no abastecimento.";
}

function simularCidade() {
    document.getElementById("resultadoSimulador").innerHTML =
        "🏙️ Sem a cidade: falta de tecnologia, transporte e serviços essenciais.";
}

/* =========================
GRÁFICOS CHART.JS
========================= */

window.addEventListener("load", function () {

    const ctx1 = document.getElementById("graficoProducao");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Plantio", "Crescimento", "Colheita", "Distribuição"],
            datasets: [{
                label: "Produção Sustentável",
                data: [10, 20, 30, 25],
                backgroundColor: "#2e7d32"
            }]
        }
    });

    const ctx2 = document.getElementById("graficoAgua");

    new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["Tradicional", "Gotejamento", "Inteligente"],
            datasets: [{
                label: "Economia de Água",
                data: [100, 70, 50],
                borderColor: "#0288d1",
                fill: false
            }]
        }
    });
});

/* =========================
ACESSIBILIDADE
========================= */

let contrasteAtivo = false;
let animacoesAtivas = true;
let imagensAtivas = true;

function toggleContraste() {
    contrasteAtivo = !contrasteAtivo;
    document.body.style.filter = contrasteAtivo ? "invert(1)" : "none";
}

function toggleAnimacoes() {
    animacoesAtivas = !animacoesAtivas;
    document.body.style.animation = animacoesAtivas ? "none" : "all 0.3s ease";
}

function toggleImagens() {
    imagensAtivas = !imagensAtivas;

    let imgs = document.querySelectorAll("img");

    imgs.forEach(img => {
        img.style.display = imagensAtivas ? "block" : "none";
    });
}

/* =========================
LEITOR DE PÁGINA
========================= */

function lerPagina() {
    let texto = document.body.innerText;
    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    speechSynthesis.speak(fala);
}

/* ==========================================
REINICIAR MINI GAME
========================================== */

function reiniciarGame() {

    sustentabilidade = 0;
    producao = 0;
    economia = 0;

    atualizarGame();

    document.getElementById("gameMessage").innerHTML =
        "Inicie sua produção sustentável.";

}


/* ==========================================
REINICIAR QUIZ
========================================== */

function reiniciarQuiz() {

    const radios =
        document.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
        radio.checked = false;
    });

    document.getElementById("resultadoQuiz").innerHTML = "";

}


/* ==========================================
AUMENTAR E DIMINUIR FONTE
========================================== */

let tamanhoFonte = 100;

function aumentarFonte() {

    tamanhoFonte += 10;

    document.body.style.fontSize =
        tamanhoFonte + "%";

}

function diminuirFonte() {

    if (tamanhoFonte > 70) {

        tamanhoFonte -= 10;

        document.body.style.fontSize =
            tamanhoFonte + "%";

    }

}


/* ==========================================
VOLTAR AO TOPO
========================================== */

function voltarTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}