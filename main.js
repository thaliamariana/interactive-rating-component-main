document.querySelectorAll('.border-number').forEach(addOnClick);
document.getElementById("submit-button").onclick = mudaPagina;

function addOnClick(elemento) {
    elemento.onclick = () => {
        sessionStorage.setItem("avaliacao", elemento.innerHTML);
    }
}

function mudaPagina() {
    let avaliacao = sessionStorage.getItem("avaliacao");
    if (avaliacao != null) {
        document.location.href = "rating-page.html";
    }
}