const listaProductos = [
  {
    id: 1,
    nombre: "Kit GeekVape Aegis Hero",
    precio: 18000,
    descripcion:
      "Geekvape Aegis Hero es un kit de mod de cápsula de sub ohmios que funciona con una batería de 1200 mAh con una salida máxima de 45 W.",
    cantidad: 1,
    img: "https://www.tiendavapor.com/image/cache/catalog/GeekVape/geekvape-aegis-hero-500x500.jpeg",
    alt: "Kit GeekVape Aegis Hero",
  },
  {
    id: 2,
    nombre: "Kit Vaporesso Luxe II",
    precio: 37890,
    descripcion:
      "Luxe II es una versión mejorada de Luxe S, con Tank actualizado de Skrr-S Tank a NRG-S Tank, equipado con bobinas GT Mesh,uno de los mejores kits.",
    cantidad: 1,
    img: "https://www.tiendavapor.com/image/cache/catalog/vaporesso/luxeii-500x500.jpg",
    alt: "Kit Vaporesso Luxe II",
  },
  {
    id: 3,
    nombre: "VAPORESSO SWAG KIT",
    precio: 25170,
    descripcion:
      "El Vaporesso Swag Kit 80 W es alimentado por una sola batería de 18650 con 2 amperios de carga rápida (INCLUIDA). Es un MOD pequeño y comodo.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/03/VSAWG.jpg",
    alt: "VAPORESSO SWAG KIT",
  },
  {
    id: 4,
    nombre: "VAPORESSO SWAG PX80",
    precio: 37580,
    descripcion:
      "El innovador Vaporesso Swag PX80 Kit tiene una potencia máxima de salida de 80W que nos proporciona un sabor excelente a través de las resistencias GTX.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/03/descarga.jpeg",
    alt: "VAPORESSO SWAG PX80",
  },
  {
    id: 5,
    nombre: "ELEAF ISTICK PICO 25",
    precio: 17500,
    descripcion:
      "Eleaf continúa con su larga racha de excelentes equipos con la mejor calidad y confiabilidad. El nuevo iStick Pico 25 es un cigarrillo electrónico compacto,tiene buena bateria. ",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/408-large_default.jpg",
    alt: "ELEAF ISTICK PICO 25",
  },
  {
    id: 6,
    nombre: "SMOK STICK PRINCE",
    precio: 37500,
    descripcion:
      "Smok vuelve con una tremenda innovación, el Stick Prince combina una poderosa batería de 3000 mAh con el atomizador TFV12 Prince, que adopta un sistema de llenado superior.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/03/smok-stick-prince.jpg",
    alt: "SMOK STICK PRINCE",
  },
  {
    id: 7,
    nombre: "SMOK X-PRIV KIT",
    precio: 27350,
    descripcion:
      "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
    alt: "SMOK X-PRIV KIT",
  },
  {
    id: 7,
    nombre: "SMOK X-PRIV KIT",
    precio: 27350,
    descripcion:
      "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
    alt: "SMOK X-PRIV KIT",
  },
  {
    id: 7,
    nombre: "SMOK X-PRIV KIT",
    precio: 27350,
    descripcion:
      "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
    alt: "SMOK X-PRIV KIT",
  },
  {
    id: 7,
    nombre: "SMOK X-PRIV KIT",
    precio: 27350,
    descripcion:
      "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
    alt: "SMOK X-PRIV KIT",
  },
  {
    id: 7,
    nombre: "SMOK X-PRIV KIT",
    precio: 27350,
    descripcion:
      "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
    alt: "SMOK X-PRIV KIT",
  },
  {
    id: 7,
    nombre: "SMOK X-PRIV KIT",
    precio: 27350,
    descripcion:
      "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
    cantidad: 1,
    img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
    alt: "SMOK X-PRIV KIT",
  },
];

const listaCarrito = []

const contenedor_productos = document.getElementById("contenedor_productos");
const contenedor_carrito = document.getElementById("contenedor_carrito");

listaProductos.forEach( producto => {
  contenedor_productos.innerHTML += ` 
    
    <div class="card" style="width: 18rem; margin-top: 50px; margin-bottom: 40px;">
        <img src="https://img.freepik.com/foto-gratis/dispositivo-vapeo_144627-25441.jpg?w=740&t=st=1679245798~exp=1679246398~hmac=c42dcf10529b5e980e75e884b0aeb57a79ce3d2cc508b7718692dc0e2148cbf6" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary id=vaper${producto.id}">Añadir al carrito</a>
        </div>
    </div>
    
    `;
});



listaProductos.forEach( producto => {   
    const productoEnEsperaDeSerAnadido = document.getElementById(`vaper${producto.id}`)


    productoEnEsperaDeSerAnadido.addEventListener("click",()=>{
        listaCarrito.push(producto)

        //eliminamos todo
    contenedor_carrito.innerHTML = ""
    //mostramos todo
    listaCarrito.forEach( producto => { 

        contenedor_carrito.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://img.freepik.com/foto-gratis/dispositivo-vapeo_144627-25441.jpg?w=740&t=st=1679245798~exp=1679246398~hmac=c42dcf10529b5e980e75e884b0aeb57a79ce3d2cc508b7718692dc0e2148cbf6" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    `

    })


    })

})