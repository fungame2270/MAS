for (let i = 1; i <= 3; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
        test = document.getElementById("nomeExame");
        location.href = `examMedico${i}.html`;
    });
}

function desmarcarExame() {
    alert("Exame desmarcado");
    location.href = "consultarExame.html";
}