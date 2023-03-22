class ProductoController {
  constructor() {
    this.listaProductos = [];
  }

  levantar() {
    let obtenerListaJSON = localStorage.getItem("listaProductos");

    if (obtenerListaJSON) {
      this.listaProductos = JSON.parse(obtenerListaJSON);
    }
  }

  mostrarEnDOM(contenedor_productos) {
    //limpio el dom
    contenedor_productos.innerHTML = "";
    //muestra  la lista completa
    this.listaProductos.forEach((producto) => {
      contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">
                        ${producto.descripcion}
                    </p>
                    <p class="card-text">
                        $${producto.precio}
                    </p>
                    <a href="#" class="btn btn-primary" id="cpu${producto.id}">Añadir al carrito</a>
                </div>
            </div>
            `;
    });
  }
}

class CarritoController {
  constructor() {
    this.listaCarrito = [];
  }

  levantar() {
    let obtenerListaJSON = localStorage.getItem("listaCarrito");

    if (obtenerListaJSON) {
      this.listaCarrito = JSON.parse(obtenerListaJSON);
    }
  }

  anadir(producto) {
    this.listaCarrito.push(producto);
    let arrFormatoJSON = JSON.stringify(this.listaCarrito);
    localStorage.setItem("listaCarrito", arrFormatoJSON);
  }

  mostrarEnDOM(contenedor_carrito) {
    //limpio el container
    contenedor_carrito.innerHTML = "";
    //muestro todo
    this.listaCarrito.forEach((producto) => {
      contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bolder border-bottom-0">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">$${producto.precio}</p>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
            `;
    });
  }

  limpiar(){
    this.listaCarrito = []
    localStorage.removeItem("listaCarrito")



  }
}

//Objetos controladores
const controladorProductos = new ProductoController();
const controladorCarrito = new CarritoController();

//Verificar STORAGE
controladorProductos.levantar();
controladorCarrito.levantar();

//DOM
const contenedor_productos = document.getElementById("contenedor_productos");
const contenedor_carrito = document.getElementById("contenedor_carrito");
const finalizar_compra = document.getElementById("finalizar_compra");
const vaciar_carrito = document.getElementById("vaciar_carrito");

//APP JS
controladorProductos.mostrarEnDOM(contenedor_productos);
controladorCarrito.mostrarEnDOM(contenedor_carrito);

//Añadimos Eventos a los botones de cada CARD
controladorProductos.listaProductos.forEach((producto) => {
  const productoEnEsperaDeSerAnadido = document.getElementById(
    `cpu${producto.id}`
  );

  productoEnEsperaDeSerAnadido.addEventListener("click", () => {
    controladorCarrito.anadir(producto);
    controladorCarrito.levantar();
    controladorCarrito.mostrarEnDOM(contenedor_carrito);
    Toastify({
        text: "Producto añadido con éxito",
        duration: 3000,
        gravity: "bottom", 
        position: "right", 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

  });
});

finalizar_compra.addEventListener("click", () => {
    

    if(controladorCarrito.listaCarrito.length > 0 ){
    controladorCarrito.limpiar()
    controladorCarrito.mostrarEnDOM(contenedor_carrito)
     

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Compra realizada con éxito!",
    showConfirmButton: false,
    timer: 1500,
  });
}else{
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Debe agregar al menos un producto al carrito.",
        showConfirmButton: false,
        timer: 2000,
      });
}



    
})

vaciar_carrito.addEventListener("click", () => {
    
    controladorCarrito.limpiar()
    controladorCarrito.mostrarEnDOM(contenedor_carrito)})