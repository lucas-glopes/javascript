function abrirMenu() {
   const telaPreta = document.getElementById("tela_preta");
   telaPreta.style.pointerEvents = "all";
   telaPreta.classList.add("show_tela_preta");

   const menu = document.getElementById("menu");
   menu.classList.add("show_menu");
}

function fecharMenu() {
   const telaPreta = document.getElementById("tela_preta");
   telaPreta.style.pointerEvents = "none";
   telaPreta.classList.remove("show_tela_preta");

   const menu = document.getElementById("menu");
   menu.classList.remove("show_menu");
}
