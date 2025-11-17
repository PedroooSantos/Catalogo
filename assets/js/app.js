// === MENU CELULAR ===
var MenuItens = document.getElementById("MenuItens");
MenuItens.style.maxHeight = "0px";

function menucelular() {
    if (MenuItens.style.maxHeight === "0px") {
        MenuItens.style.maxHeight = "200px";
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}

// === FILTRO DE CATEGORIAS ===
document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".categoria-btn");
    const produtos = document.querySelectorAll(".col-4");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const filtro = botao.getAttribute("data-filter");

            produtos.forEach(prod => {
                if (filtro === "all" || prod.getAttribute("data-category") === filtro) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
            });

            botoes.forEach(b => b.classList.remove("ativo"));
            botao.classList.add("ativo");
        });
    });
});
