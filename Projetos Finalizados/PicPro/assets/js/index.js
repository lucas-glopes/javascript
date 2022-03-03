const listaOpcoes = document.querySelector(".opcoes_transacoes");

listaOpcoes.addEventListener("click", (e) => {
   document.querySelector(".aviso_selecao").classList.remove("show");

   if (
      e.target.tagName == "LI" ||
      e.target.tagName == "P" ||
      e.target.tagName == "IMG"
   ) {
      const classId = () => {
         if (e.target.tagName == "LI") {
            return e.target.id;
         } else {
            return e.target.classList;
         }
      };

      const secaoEscolha = document.querySelector(
         `div[data-id="${classId(e.target)}"]`
      );

      secaoEscolha.classList.add("show");

      for (let i = 1; i <= 4; i++) {
         if (i != classId(e.target)) {
            document
               .querySelector(`div[data-id="${i}"]`)
               .classList.remove("show");
         }
      }
   }
});

const iconeOlho = document.querySelector(".saldo img");
let switch_icon = 0;

const texto_saldo = document.querySelector(".saldo p");

iconeOlho.addEventListener("click", () => {
   if (switch_icon == 0) {
      texto_saldo.innerHTML = "<strong>R$ --,--</strong>";

      switch_icon = 1;
   } else if (switch_icon == 1) {
      texto_saldo.innerHTML = "<strong>R$ 20,00</strong>";

      switch_icon = 0;
   }
});

let mudarImg = true;

// Mudar img QR Code
const item_QRCode = document.getElementById("1");

item_QRCode.addEventListener("mouseover", () => {
   if (!item_QRCode.classList.contains("selected")) {
      mudarImg = true;

      const img = document.getElementById("1").querySelector("img");

      img.setAttribute("src", "assets/imgs/qrcode-verde.png");
   }
});

item_QRCode.addEventListener("mouseout", () => {
   if (mudarImg == true) {
      const img = document.getElementById("1").querySelector("img");

      img.setAttribute("src", "assets/imgs/qrcode.png");
   }
});

// Mudar img PIX
const item_PIX = document.getElementById("2");

item_PIX.addEventListener("mouseover", () => {
   if (!item_PIX.classList.contains("selected")) {
      mudarImg = true;

      const img = document.getElementById("2").querySelector("img");

      img.setAttribute("src", "assets/imgs/pix-verde.png");
   }
});

item_PIX.addEventListener("mouseout", () => {
   if (mudarImg == true) {
      const img = document.getElementById("2").querySelector("img");

      img.setAttribute("src", "assets/imgs/pix.png");
   }
});

// Mudar img Pagar Boleto
const item_PagarBoleto = document.getElementById("3");

item_PagarBoleto.addEventListener("mouseover", () => {
   if (!item_PagarBoleto.classList.contains("selected")) {
      mudarImg = true;

      const img = document.getElementById("3").querySelector("img");

      img.setAttribute("src", "assets/imgs/boleto-verde.png");
   }
});

item_PagarBoleto.addEventListener("mouseout", () => {
   if (mudarImg == true) {
      const img = document.getElementById("3").querySelector("img");

      img.setAttribute("src", "assets/imgs/codigo.png");
   }
});

// Mudar img Cobrar
const item_Cobrar = document.getElementById("4");

item_Cobrar.addEventListener("mouseover", () => {
   if (!item_Cobrar.classList.contains("selected")) {
      mudarImg = true;

      const img = document.getElementById("4").querySelector("img");

      img.setAttribute("src", "assets/imgs/cobrar-verde.png");
   }
});

item_Cobrar.addEventListener("mouseout", () => {
   if (mudarImg == true) {
      const img = document.getElementById("4").querySelector("img");

      img.setAttribute("src", "assets/imgs/cobrar-icon.png");
   }
});

const itemTransacao = [item_QRCode, item_PIX, item_PagarBoleto, item_Cobrar];

const srcImgs = [
   "assets/imgs/qrcode.png",
   "assets/imgs/pix.png",
   "assets/imgs/codigo.png",
   "assets/imgs/cobrar-icon.png",
];

function tiraClasseSelected(indice) {
   for (let i = 0; i < itemTransacao.length; i++) {
      if (i != indice) {
         let img = itemTransacao[i].querySelector("img");
         img.setAttribute("src", srcImgs[i]);

         itemTransacao[i].classList.remove("selected");
      }
   }
}

// selecionar QR Code
item_QRCode.addEventListener("click", () => {
   tiraClasseSelected(item_QRCode.id - 1);

   mudarImg = false;

   const img = document.getElementById("1").querySelector("img");
   img.setAttribute("src", "assets/imgs/qrcode-verde.png");

   item_QRCode.classList.add("selected");
});

// selecionar PIX
item_PIX.addEventListener("click", () => {
   tiraClasseSelected(item_PIX.id - 1);

   mudarImg = false;

   const img = document.getElementById("2").querySelector("img");
   img.setAttribute("src", "assets/imgs/pix-verde.png");

   item_PIX.classList.add("selected");
});

// selecionar Pagar Boleto
item_PagarBoleto.addEventListener("click", () => {
   tiraClasseSelected(item_PagarBoleto.id - 1);

   mudarImg = false;

   const img = document.getElementById("3").querySelector("img");
   img.setAttribute("src", "assets/imgs/boleto-verde.png");

   item_PagarBoleto.classList.add("selected");
});

// selecionar Cobrar
item_Cobrar.addEventListener("click", () => {
   tiraClasseSelected(item_Cobrar.id - 1);

   mudarImg = false;

   const img = document.getElementById("4").querySelector("img");
   img.setAttribute("src", "assets/imgs/cobrar-verde.png");

   item_Cobrar.classList.add("selected");
});
