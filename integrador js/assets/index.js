const products = document.querySelector(".productos-container");

const btnLoad = document.querySelector(".btn-load");

const categories = document.querySelector(".categorias");

const categoriesList = document.querySelectorAll(".category");

//funcion para ir a guardar e ir a buscar en el localstorage //

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
  productos.innerHTML = productsList.map(renderproduct).join("");
};

const renderproducts = (index = 0, category = undefined) => {
  if (!category) {
    renderdividedproducts(index);
    return;
  }
  renderFilteredProductos(category);
};

const changeshowmoreBtnstate = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const changeBtnActiveState = (selectedcategory) => {
  const categorias = [...categoriesList];
  categorias.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedcategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (e) => {
  const selectedcategory = e.target.dataset.category;
  changeshowmoreBtnstate(selectedcategory);
  changeBtnActiveState(selectedcategory);
};

const applyfilter = (e) => {
  if (!e.target.classList.contains("category")) {
    return;
  } else {
    changeFilterState(e);
  }
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderproducts();
  } else {
    renderproducts(0, e.target.dataset.category);
    productscontroller.nextproductsIndex = 1;
  }
};
//////
const init = () => {
  renderproducts();
  categories.addEventListener("click", applyfilter);
};

init();
