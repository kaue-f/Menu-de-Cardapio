//Menu Cardapio
const lista = [
  {
    id: 1,
    nome: "Hamburguer Cheddar",
    img: "1.jpg",
    ctg: "Lanche",
    valor: "R$: 18,90",
    descrição: " Hamburguer de carne 120g com cheddar, bacon e cebola picada.",
  },
  {
    id: 2,
    nome: "Hamburguer de Frango",
    img: "2.jpg",
    ctg: "Lanche",
    valor: "R$: 16,90",
    descrição: "Hamburguer de frango 120g com molho branco e alface.",
  },
  {
    id: 3,
    nome: "Hamburguer Picanha",
    img: "3.jpg",
    ctg: "Lanche",
    valor: "R$: 35,90",
    descrição: "2 Hamburguer de picanha 150g com mussarela e fatia de bacon.",
  },
  {
    id: 4,
    nome: "Hamburguer 150g",
    img: "4.jpg",
    ctg: "Lanche",
    valor: "R$: 26,90",
    descrição: "Hamburguer de 150g com molho especial e bacon.",
  },
  {
    id: 5,
    nome: "Hamburguer Vegano",
    img: "5.jpg",
    ctg: "Lanche",
    valor: "R$: 24,90",
    descrição:
      "Hamburguer de carne vegana com alface, tomate, cebola roxa, pepino e molho vagano",
  },
  {
    id: 6,
    nome: "Molho Chedder",
    img: "6.jpg",
    ctg: "Acompanhente",
    valor: "R$: 9,90",
    descrição: "Molho chedder 100g",
  },
  {
    id: 7,
    nome: "Batata Frita",
    img: "7.jpg",
    ctg: "Acompanhente",
    valor: "R$: 9,90",
    descrição: "Batata frita 100g",
  },
  {
    id: 8,
    nome: "Batata Frita com Chedder e Bacon",
    img: "8.jpg",
    ctg: "Acompanhente",
    valor: "R$: 14,90",
    descrição: "Batata frita com chedder e bacon 150g",
  },
  {
    id: 9,
    nome: "Batata Frita com Chedder, Catupiry e Bacon",
    img: "9.jpg",
    ctg: "Acompanhente",
    valor: "R$: 17,90",
    descrição: "Batata frita com chedder, catupiry e bacon 170g",
  },
  {
    id: 10,
    nome: "Coca Cola KS",
    img: "10.png",
    ctg: "Bebida",
    valor: "R$: 5,00",
    descrição: "Coca Cola ks 290ml",
  },
  {
    id: 11,
    nome: "Coca Cola Lata",
    img: "11.jpg",
    ctg: "Bebida",
    valor: "R$: 4,50",
    descrição: "Coca Cola 350ml",
  },
  {
    id: 12,
    nome: "Fanta Laranja Lata",
    img: "12.jpg",
    ctg: "Bebida",
    valor: "R$: 4,00",
    descrição: "Fanta laranja 350ml",
  },
  {
    id: 13,
    nome: "Fanta Guaraná Lata",
    img: "13.jpg",
    ctg: "Bebida",
    valor: "R$: 4,00",
    descrição: "Fanta guaraná 350ml",
  },
  {
    id: 14,
    nome: "Sprite Lata",
    img: "14.jpg",
    ctg: "Bebida",
    valor: "R$: 4,00",
    descrição: "Sprite 350ml",
  },
  {
    id: 15,
    nome: "H2O garrafa",
    img: "15.jpg",
    ctg: "Bebida",
    valor: "R$: 5,00",
    descrição: "H2O 500ml",
  },
  {
    id: 16,
    nome: "Água Mineral com Gás/ Sem Gás",
    img: "16.jpg",
    ctg: "Bebida",
    valor: "R$: 3,00",
    descrição: "Água mineral com gás/ sem gás 500ml",
  },
];

//conexão com menu
const cardapio = document.querySelector(".cardapio");
const btnMenu = document.querySelector(".btn-menu");

//Carregamento do menu
window.addEventListener("DOMContentLoaded", function () {
  displayCardapioLista(lista);
  displayBtnMenu();
});

function displayCardapioLista(cardapioItem) {
  let displayCardapio = cardapioItem.map(function (item) {
    return `<article class="menu-item">
        <img srcset=${item.img} id="img-menu" alt=${item.nome} />
        <div class="valor-descrição">
          <header>
            <div id="nome">${item.nome}</b></div>
            <div id="valor">${item.valor}</div>
          </header>
          <div id="descrição"> ${item.descrição}</div>
        </div>
      </article>`;
  });
    displayCardapio = displayCardapio.join("");
    
  cardapio.innerHTML = displayCardapio;
}

function displayBtnMenu() {
  const ctgs = lista.reduce(
    function (values, item) {
      if (!values.includes(item.ctg)) {
        values.push(item.ctg);
      }
      return values;
    },
    ["Todos"]
  );
  const ctgBtn = ctgs
    .map(function (ctg) {
      return `<button class="btn-filtro" type="button" data-id=${ctg}>${ctg}</button>`;
    })
    .join("");
  btnMenu.innerHTML = ctgBtn;
  const btnFiltro = btnMenu.querySelectorAll(".btn-filtro");
  btnFiltro.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const ctg = e.currentTarget.dataset.id;
      const cardapioCtg = lista.filter(function (cardapioItem) {
        if (cardapioItem.ctg === ctg) {
          return cardapioItem;
        }
      });
      if (ctg === "Todos") {
        displayCardapioLista(lista);
      } else {
        displayCardapioLista(cardapioCtg);
      }
    });
  });
}