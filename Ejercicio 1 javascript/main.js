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
    ingredientes: "calabresa, Mozzarella, salsa de tomate",
    precio: 1100,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 4,
    sabordepizza: "provolone",
    ingredientes: "provolone, salsa de tomate",
    precio: 1400,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 5,
    sabordepizza: "Con huevo",
    ingredientes: "huevo, Mozzarella, salsa de tomate",
    precio: 599,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 6,
    sabordepizza: "salchichas",
    ingredientes: "salsa de tomate, Mozzarella",
    precio: 1000,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 7,
    sabordepizza: "fugazetta",
    ingredientes: "Mozzarella, cebolla",
    precio: 1150,
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 8,
    sabordepizza: "napolitana",
    ingredientes: "tomate en rodajas, Mozzarella, salsa de tomate",
    precio: 590,
    envioporlocal: true,
    envioporaplicacion: true,
  },

  {
    categoria: "pizzas",
    id: 9,
    precio: 1400,
    sabordepizza: "anchoas",
    ingredientes: "anchoas, Mozzarella, salsa de tomate",
    envioporlocal: true,
    envioporaplicacion: true,
  },
  {
    categoria: "pizzas",
    id: 10,
    sabordepizza: "rucula",
    ingredientes: "con rucula, Mozzarella, salsa de tomate, aceite de oliva",
    precio: 1300,
    envioporlocal: true,
    envioporaplicacion: true,
  },
];

// a)  Las pizzas que tengan un id impar.

const idimparpizzas = pizzas.filter((pizzas) => {
  return pizzas.id % 2 === 1;
});

// idimparpizzas.forEach((pizzas) => {
//   console.log(`La pizza ${pizzas.sabordepizza} tiene id impar`);
// });

// b) ¿Hay alguna pizza que valga menos de $600?

const filtrarpreciomenorA = (precio) => {
  const pizzasfiltroprecio = pizzas.filter((pizzas) => {
    return pizzas.precio < precio;
  });
  return pizzasfiltroprecio;
};
console.log(filtrarpreciomenorA(600));

// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
