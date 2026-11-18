
document.addEventListener("DOMContentLoaded", () => {

    // Elementos do HTML
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const milliseconds = document.getElementById("milliseconds");

    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resumeBtn = document.getElementById("resumeBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Variáveis do cronômetro
    let interval;
    let startTime = 0;
    let elapsedTime = 0;
    let running = false;

    // Atualiza os números na tela
    function updateDisplay() {

        const totalTime = elapsedTime;

        const mins = Math.floor(totalTime / 60000);
        const secs = Math.floor((totalTime % 60000) / 1000);
        const millis = Math.floor(totalTime % 1000);

        minutes.textContent = String(mins).padStart(2, "0");
        seconds.textContent = String(secs).padStart(2, "0");
        milliseconds.textContent = String(millis).padStart(3, "0");
    }

    // Atualiza o cronômetro
    function updateTimer() {

        elapsedTime = Date.now() - startTime;

        updateDisplay();
    }

    // Iniciar
    startBtn.addEventListener("click", () => {

        if (running) return;

        elapsedTime = 0;
        startTime = Date.now();

        running = true;

        interval = setInterval(updateTimer, 10);

    });

    // Pausar
    pauseBtn.addEventListener("click", () => {

        if (!running) return;

        clearInterval(interval);

        elapsedTime = Date.now() - startTime;

        running = false;

        updateDisplay();

    });

    // Continuar
    resumeBtn.addEventListener("click", () => {

        if (running || elapsedTime === 0) return;

        startTime = Date.now() - elapsedTime;

        running = true;

        interval = setInterval(updateTimer, 10);

    });

    // Reiniciar
    resetBtn.addEventListener("click", () => {

        clearInterval(interval);

        elapsedTime = 0;
        startTime = 0;
        running = false;

        updateDisplay();

    });

});

 function abrirAba(url) {
        window.open(url, "_blank");
    }

    const linkedin = document.getElementById("linkedin");
    const twitter = document.getElementById("twitter");
    const github = document.getElementById("github");

    if (linkedin) {
        linkedin.addEventListener("click", function () {
            abrirAba("https://www.linkedin.com/in/aguiarwork/");
        });
    }

    if (twitter) {
        twitter.addEventListener("click", function () {
            abrirAba("https://x.com/AguiarWork");
        });
    }

    if (github) {
        github.addEventListener("click", function () {
            abrirAba("https://github.com/Aguiar-Work");
        });
    }