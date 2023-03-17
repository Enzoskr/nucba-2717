const productsdata = [
  {
    id: 1,
    name: "placa de video asus rog strix Rtx 3080",
    price: "200000 ",
    marca: "Asus",
    category: "placas de video",
    cardImg: "./assets/img/productos/rogstrix 3080.jpg",
  },
  {
    id: 2,
    name: "placa de video Msi Rtx 3080Ti",
    price: "220000 ",
    marca: "Msi",
    category: "placas de video",
    cardImg: "./assets/img/productos/ventus.jpeg",
  },
  {
    id: 3,
    name: "placa de video palit Rtx 3060",
    price: "170000 ",
    marca: "Palit",
    category: "placas de video",
    cardImg: "./assets/img/productos/3060palit.jpg",
  },
  {
    id: 4,
    name: "placa de video asus dual 3070",
    price: "130000 ",
    marca: "Asus",
    category: "placas de video",
    cardImg: "./assets/img/productos/asusdual.jpeg",
  },

  {
    id: 5,
    name: "placa de video gtx 1660 super",
    price: "170000 ",
    marca: "Evga",
    category: "placas de video",
    cardImg: "./assets/img/productos/1660super.jpg",
  },
  {
    id: 6,
    name: "Mouse Logitech superlight",
    price: "24000 ",
    marca: "Logitech",
    category: "perisfericos",
    cardImg: "./assets/img/productos/superlight.jpeg",
  },
  {
    id: 7,
    name: "auriculares cloud flight",
    price: "28000 ",
    marca: "Logitech",
    category: "perisfericos",
    cardImg: "./assets/img/productos/cloud flight.jpg",
  },
  {
    id: 8,
    name: "Mouse Logitech g203",
    price: "8000 ",
    marca: "Logitech",
    category: "perisfericos",
    cardImg: "./assets/img/productos/g203.jpg",
  },
  {
    id: 9,
    name: "Teclado hyperx alloy fps pro",
    price: "17000 ",
    marca: "Logitech",
    category: "perisfericos",
    cardImg: "./assets/img/productos/alloyfpspro.jpg",
  },
  {
    id: 10,
    name: "mousepad Logitech g640",
    price: "7456 ",
    marca: "Logitech",
    category: "perisfericos",
    cardImg: "./assets/img/productos/g640.jpg",
  },
  {
    id: 11,
    name: "Monitor Asus vg248qg 165hz",
    price: "95000",
    marca: "Asus",
    category: "Monitores",
    cardImg: "./assets/img/productos/moni165.jpg",
  },
  {
    id: 12,
    name: "Monitor gamer LG 24MK430H led 23.8",
    price: "48499",
    marca: "LG",
    category: "Monitores",
    cardImg: "./assets/img/productos/monilg.jpg",
  },
  {
    id: 13,
    name: "Monitor Samsung T350 75Hz IPS Full HD",
    price: "41999 ",
    marca: "Samsung",
    category: "Monitores",
    cardImg: "./assets/img/productos/t350.jpg",
  },
  {
    id: 14,
    name: "FAN COOLER GABINETE AEROCOOL MIRAGE 12 ARGB",
    price: "3400 ",
    marca: "Aerocool",
    category: "accesorios",
    cardImg: "./assets/img/productos/fanmirage.png",
  },
  {
    id: 15,
    name: "Pasta termica arctic mx-4 4gr",
    price: "2799 ",
    marca: "Logitech",
    category: "accesorios",
    cardImg: "./assets/img/productos/pasta termica.jpg",
  },
  {
    id: 16,
    name: "Amd Ryzen 5 5600",
    price: "65999 ",
    marca: "Ryzen",
    category: "Procesadores",
    cardImg: "./assets/img/productos/r55600.jpg",
  },
  {
    id: 17,
    name: "Amd Ryzen 5 7600",
    price: "92864 ",
    marca: "Ryzen",
    category: "Procesadores",
    cardImg: "./assets/img/productos/R57600.png ",
  },
  {
    id: 18,
    name: "Amd Ryzen 5 5600g",
    price: "49999 ",
    marca: "Ryzen",
    category: "Procesadores",
    cardImg: "./assets/img/productos/r55600.jpg",
  },
  {
    id: 19,
    name: "Intel i5 11400f",
    price: "51999 ",
    marca: "Intel",
    category: "Procesadores",
    cardImg: "./assets/img/productos/i5.png",
  },
  {
    id: 20,
    name: "Intel i9 12900kf",
    price: "158999 ",
    marca: "Intel",
    category: "Procesadores",
    cardImg: "./assets/img/productos/i9.jpg",
  },
];
// mostrar container //
const splitproducts = (size) => {
  let dividedproducts = [];

  for (let i = 0; i < productsdata.length; i += size) {
    dividedproducts.push(productsdata.slice(i, i + size));
  }
  return dividedproducts;
};

const productscontroller = {
  dividedproducts: splitproducts(6),
  nextProductsIndex: 1,
  productslimit: splitproducts(6).length,
};
