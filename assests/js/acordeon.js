// JavaScript para funcionalidade do acordeão
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Fechar todos os painéis abertos
        for (var j = 0; j < panels.length; j++) {
            panels[j].style.display = "none";
        }

        // Abrir o painel associado ao botão clicado
        var panel = this.nextElementSibling;
        panel.style.display = "block";
    });
}