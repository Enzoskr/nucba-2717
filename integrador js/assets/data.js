const productsdata = [
  {
    id: 1,
    name: "Placa de video asus rog strix Rtx 3080",
    price: "170.000$ ",
    marca: "Asus",
    category: "placa de video",
    cardImg: "./assets/img/productos/rogstrix 3080.jpg",
  },
  {
    id: 2,
    name: "Placa de video Msi Rtx 3080Ti",
    price: "170.000$ ",
    marca: "Msi",
    category: "placa de video",
    cardImg: "./assets/img/productos/ventus.jpeg",
  },
  {
    id: 3,
    name: "Placa de video palit Rtx 3060",
    price: "170.000$ ",
    marca: "Palit",
    category: "placa de video",
    cardImg: "./assets/img/productos/3060palit.jpg",
  },
  {
    id: 4,
    name: "Placa de video asus dual 3070",
    price: "130.000$ ",
    marca: "Asus",
    category: "placa de video",
    cardImg: "./assets/img/productos/asusdual.jpeg",
  },

  {
    id: 5,
    name: "Placa de video gtx 1660 super",
    price: "170.000$ ",
    marca: "Evga",
    category: "placa de video",
    cardImg: "./assets/img/productos/1660super.jpg",
  },
  {
    id: 6,
    name: "Mouse Logitech superlight",
    price: "24.000$ ",
    marca: "Logitech",
    category: "perisféricos",
    cardImg: "./assets/img/productos/superlight.jpeg",
  },
  {
    id: 7,
    name: "auriculares cloud flight",
    price: "28.000$ ",
    marca: "Logitech",
    category: "perisféricos",
    cardImg: "./assets/img/productos/cloud flight.jpg",
  },
  {
    id: 8,
    name: "Mouse Logitech g203",
    price: "8.000$ ",
    marca: "Logitech",
    category: "perisféricos",
    cardImg: "./assets/img/productos/g203.jpg",
  },
  {
    id: 9,
    name: "Teclado hyperx alloy fps pro",
    price: "17.000$ ",
    marca: "Logitech",
    category: "perisféricos",
    cardImg: "./assets/img/productos/alloyfpspro.jpg",
  },
  {
    id: 10,
    name: "mousepad Logitech g640",
    price: "7.456$ ",
    marca: "Logitech",
    category: "perisféricos",
    cardImg: "./assets/img/productos/g640.jpg",
  },
  {
    id: 11,
    name: "Monitor Asus vg248qg 165hz",
    price: "95.000$",
    marca: "Asus",
    category: "monitor",
    cardImg: "./assets/img/productos/moni165.jpg",
  },
  {
    id: 12,
    name: "Monitor gamer LG 24MK430H led 23.8",
    price: "48.499$",
    marca: "LG",
    category: "monitor",
    cardImg: "./assets/img/productos/monilg.jpg",
  },
  {
    id: 13,
    name: "Monitor Samsung T350 75Hz IPS Full HD",
    price: "41.999$ ",
    marca: "Samsung",
    category: "monitor",
    cardImg: "./assets/img/productos/t350.jpg",
  },
  {
    id: 14,
    name: "FAN COOLER GABINETE AEROCOOL MIRAGE 12 ARGB",
    price: "3.400$ ",
    marca: "Aerocool",
    category: "Accesorios",
    cardImg: "./assets/img/productos/fanmirage.png",
  },
  {
    id: 15,
    name: "Pasta termica arctic mx-4 4gr",
    price: "2.799$ ",
    marca: "Logitech",
    category: "Accesorios",
    cardImg: "./assets/img/productos/pasta termica.jpg",
  },
  {
    id: 16,
    name: "Amd Ryzen 5 5600",
    price: "65.999$ ",
    marca: "Ryzen",
    category: "Procesadores",
    cardImg: "./assets/img/productos/r55600.jpg",
  },
  {
    id: 17,
    name: "Amd Ryzen 5 7600",
    price: "92.864$ ",
    marca: "Ryzen",
    category: "Procesadores",
    cardImg: "./assets/img/productos/R57600.png ",
  },
  {
    id: 18,
    name: "Amd Ryzen 5 5600g",
    price: "49.999$ ",
    marca: "Ryzen",
    category: "Procesadores",
    cardImg: "./assets/img/productos/r55600.jpg",
  },
  {
    id: 19,
    name: "Intel i5 11400f",
    price: "51.999$ ",
    marca: "Intel",
    category: "Procesadores",
    cardImg: "./assets/img/productos/i5.png",
  },
  {
    id: 20,
    name: "Intel i9 12900kf",
    price: "158.999$ ",
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
  nextproductsindex: 1,
  productslimit: splitproducts(6).length,
};
