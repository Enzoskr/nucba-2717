const pizzas = [
  {
    categoria: "pizzas",
    id: 1,
    sabordepizza: "Mozzarella",
    ingredientes: "Mozzarella, salsa de tomate",
    precio: 560,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 2,
    sabordepizza: "jamon y morrón",
    ingredientes: "jamón, morrón,Mozzarella",
    precio: 1000,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 3,
    sabordepizza: "calabresa",
    ingredientes: "calabresa, Mozzarella y salsa de tomate",
    precio: 1100,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 4,
    sabordepizza: "provolone",
    ingredientes: "provolone y salsa de tomate",
    precio: 1400,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 5,
    sabordepizza: "Con huevo",
    ingredientes: "huevo, Mozzarella y salsa de tomate",
    precio: 599,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 6,
    sabordepizza: "salchichas",
    ingredientes: "salchichas, Mozzarella y salsa de tomate ",
    precio: 1000,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 7,
    sabordepizza: "fugazetta",
    ingredientes: "Mozzarella y cebolla",
    precio: 1150,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 8,
    sabordepizza: "napolitana",
    ingredientes: "tomate en rodajas, Mozzarella y salsa de tomate",
    precio: 590,
    envioporlocal: true,
    envioporaplicacion: true,
  },

  {
    categoria: "pizzas",
    id: 9,
    precio: 1400,
    sabordepizza: "anchoas",
    ingredientes: "anchoas, Mozzarella y salsa de tomate",
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 10,
    sabordepizza: "rucula",
    ingredientes: "con rucula, Mozzarella, aceite de oliva y salsa de tomate",
    precio: 1300,
    envioporlocal: true,
    envioporaplicacion: true,
  },
];

// a)  Las pizzas que tengan un id impar.

const idimparpizzas = pizzas.filter((pizzas) => {
  return pizzas.id % 2 === 1;
});

idimparpizzas.forEach((pizzas) => {
  console.log(`La pizza ${pizzas.sabordepizza} tiene id impar`);
});

// b) ¿Hay alguna pizza que valga menos de $600?

const haypizzasconpreciomenorA = (precio) => {
  return pizzas.some((pizzas) => {
    return pizzas.precio > precio;
  })
    ? console.log(`hay pizzas con menor precio a $${precio}`)
    : console.log(`no hay pizzas con menor precio a $${precio}`);
};

haypizzasconpreciomenorA(600);

// c) El nombre de cada pizza con su respectivo precio.

const PizzasconSaboryPrecio = pizzas.filter((pizzas) => {
  return pizzas.sabordepizza && pizzas.precio;
});

PizzasconSaboryPrecio.forEach((pizzas) => {
  console.log(`La pizza de ${pizzas.sabordepizza}  cuesta $${pizzas.precio}`);
});

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).
//  Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

const Pizzasconsaboryingredientes = pizzas.filter((pizzas) => {
  return pizzas.sabordepizza && pizzas.ingredientes;
});

PizzasconSaboryPrecio.forEach((pizzas) => {
  console.log(
    `La pizza de ${pizzas.sabordepizza}  contiene los ingredientes ${pizzas.ingredientes}`
  );
});
