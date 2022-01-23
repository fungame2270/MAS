for (let i = 1; i <= 3; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
        test = document.getElementById("nomeExame");
        location.href = `examMarcacao${i}.html`;
    });
}

function marcarExame() {
    alert("Exame marcado");
    location.href = "lab.html";
}