const products = document.querySelector(".productos-container");
//btn ver mas
const btnLoad = document.querySelector(".btn-load");
//contenedor de las categorias
const categories = document.querySelector(".categorias");
//las categorias en un htmlcollection de los botones
const productsCart = document.querySelector(".cart-container");

const total = document.querySelector(".total");

const categoriesList = document.querySelectorAll(".category");

const cartBtn = document.querySelector(".cart-label");

const cartBubble = document.querySelector(".cart-bubble");

const barsBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const buyBtn = document.querySelector(".btn-buy");

const successModal = document.querySelector(".add-modal");

const deleteBtn = document.querySelector(".btn-delete");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const savelocalstorage = (cartlist) => {
  localStorage.setItem("cart", JSON.stringify(cartlist));
};

const renderproduct = (productos) => {
  const { id, name, price, marca, userimg, cardImg } = productos;
  return `  
    <div class="card">
      <img src="${cardImg}" alt="${name}"/>
      <div class="hero-card-info">
      <div class="hero-card-top"><h3>${name} </h3>
    <span><i class="fa-solid fa-truck-fast"></i></span>
     </div>
      <div class="hero-card-botton">
      <div class="marca-ensambladora"><p>${marca}</p></div>
      <div class="hero-card-precio"><p>💲${price}</p></div>
  </div> 
        
  </div> 
    <button
              class="btn-add"
              data-id="${id}"
              data-name="${name}"
              data-price="${price}"
              data-marca="${marca}"
              data-img="${cardImg}">
                Add
            </button>

</div>
           
    `;
};

const renderdividedproducts = (index = 0) => {
  products.innerHTML += productscontroller.dividedproducts[index]
    .map(renderproduct)
    .join("");
};

const renderFilteredProductos = (category) => {
  const productsList = productsdata.filter((productos) => {
    return productos.category === category;
  });
  products.innerHTML = productsList.map(renderproduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderdividedproducts(index);
    return;
  }
  renderFilteredProductos(category);
};
//// renderizado de cards

///paginación

const changeShowMoreBtnState = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeShowMoreBtnState(selectedCategory);
  changeBtnActiveState(selectedCategory);
};

const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) {
    return;
  } else {
    changeFilterState(e);
  }
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
    productscontroller.nextProductsIndex = 1;
  }
};

const isLastIndexOf = () => {
  return (
    productscontroller.nextProductsIndex === productscontroller.productslimit
  );
};

const showMoreProducts = () => {
  renderProducts(productscontroller.nextProductsIndex);
  productscontroller.nextProductsIndex++;
  if (isLastIndexOf()) {
    btnLoad.classList.add("hidden");
  }
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) {
    return;
  }
  barsMenu.classList.remove("open-menu");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  ) {
    return;
  }
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
};
const renderCardProduct = (cartProduct) => {
  const { id, name, price, marca, img, quantity } = cartProduct;
  return `
  <div class="cart-item">
  <img src=${img} alt="${name}">
  <div class="item-info">
    <h3 class="item-tittle">${name}</h3>
    <p class="item-marca">${marca}</p>
    <span class="item-price">💲${price}</span>
  </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
`;
};

const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `
    <p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(renderCardProduct).join("");
};
const getCartTotal = () => {
  return cart.reduce((acc, cur) => {
    return acc + Number(cur.price) * cur.quantity;
  }, 0);
};

const showTotal = () => {
  total.innerHTML = `${getCartTotal()}💲`;
};

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
};

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

const checkCartState = () => {
  savelocalstorage(cart);
  renderCart();
  showTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) {
    return;
  }
  const { id, name, price, marca, img } = e.target.dataset;

  const product = productdata(id, name, price, marca, img);
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito con exito");
  }

  checkCartState();
};
const productdata = (id, name, price, marca, img) => {
  return { id, name, price, marca, img };
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => {
    return item.id === product.id;
  });
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const createCartProduct = (product) => {
  cart = [
    ...cart,
    {
      ...product,
      quantity: 1,
    },
  ];
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => {
    return item.id === id;
  });

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }

  substractProductUnit(existingCartProduct);
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

const handleplusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => {
    return item.id === id;
  });
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handleplusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};
const completeBuy = () => {
  completeCartAction(
    "¿desea comprar lo que hay en el carrito?",
    "¡Gracias por su compra!"
  );
};
const deleteCart = () => {
  completeCartAction(
    "¿Desea eliminar el carrito?",
    "El carrito se elimino perfectamente"
  );
};

////// inits
const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  btnLoad.addEventListener("click", showMoreProducts);
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeOnScroll);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

init();
