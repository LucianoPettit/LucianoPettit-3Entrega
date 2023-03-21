const listaProductos = [
  {
    id: 1,
    nombre: "Kit GeekVape Aegis Hero",
    precio: 18000,
    descripcion:
      "Geekvape Aegis Hero es un kit de mod de cápsula de sub ohmios que funciona con una batería de 1200 mAh con una salida máxima de 45 W.",
    cantidad: 3,
    img: "https://www.tiendavapor.com/image/cache/catalog/GeekVape/geekvape-aegis-hero-500x500.jpeg",
    alt: "Kit GeekVape Aegis Hero",
  },
  {
    id: 2,
    nombre: "Kit Vaporesso Luxe II",
    precio: 37890,
    descripcion:
      "Luxe II es una versión mejorada de Luxe S, con Tank actualizado de Skrr-S Tank a NRG-S Tank, equipado con bobinas GT Mesh,uno de los mejores kits.",
    cantidad: 4,
    img: "https://www.tiendavapor.com/image/cache/catalog/vaporesso/luxeii-500x500.jpg",
    alt: "Kit Vaporesso Luxe II",
  },
  {
    id: 3,
    nombre: "VAPORESSO SWAG KIT",
    precio: 25170,
    descripcion:
      "El Vaporesso Swag Kit 80 W es alimentado por una sola batería de 18650 con 2 amperios de carga rápida (INCLUIDA). Es un MOD pequeño y comodo.",
    cantidad: 9,
    img: "https://cdn.shopify.com/s/files/1/0271/3786/7820/products/vaporessoswag2a_500x.jpg?v=1664749748",
    alt: "VAPORESSO SWAG KIT",
  },
  {
    id: 4,
    nombre: "VAPORESSO SWAG PX80",
    precio: 37580,
    descripcion:
      "El innovador Vaporesso Swag PX80 Kit tiene una potencia máxima de salida de 80W que nos proporciona un sabor excelente a través de las resistencias GTX.",
    cantidad: 2,
    img: "https://rosariovapeshop.com/wp-content/uploads/2022/09/1000004869.jpg",
    alt: "VAPORESSO SWAG PX80",
  },
  {
    id: 5,
    nombre: "ELEAF ISTICK PICO 25",
    precio: 17500,
    descripcion:
      "Eleaf continúa con su larga racha de excelentes equipos con la mejor calidad y confiabilidad. El nuevo iStick Pico 25 es un cigarrillo electrónico compacto,tiene buena bateria. ",
    cantidad: 6,
    img: "data:image/jpeg;base64,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",
    alt: "ELEAF ISTICK PICO 25",
  },
  {
    id: 6,
    nombre: "SMOK STICK PRINCE",
    precio: 37500,
    descripcion:
      "Smok vuelve con una tremenda innovación, el Stick Prince combina una poderosa batería de 3000 mAh con el atomizador TFV12 Prince, que adopta un sistema de llenado superior.",
    cantidad: 10,
    img: "data:image/jpeg;base64,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",
    alt: "SMOK STICK PRINCE",
  },
  {
    id: 7,
    nombre: "VOOPOO - DRAG X 80W ",
    precio: 23977,
    descripcion:
      "  VooPoo presenta Drag X, una nueva y mejorada variación de cápsulas portátiles de la aclamada serie Drag. El Drag X cuenta con una batería 18650 intercambiable.",
    cantidad: 3,
    img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero001_15f84611-a470-4ff7-9a45-10db0178d334_720x720.webp?v=1661873631",
    alt: "VOOPOO - DRAG X 80W",
  },
  {
    id: 8,
    nombre: "Vaporesso  Gen Nano 80w",
    precio: 28530,
    descripcion:
      "El Vaporesso Gen Nano es un mod electrónico compacto que contiene una batería integrada de 2000 mAh. Capaz de entregar 80 vatios, es un hermoso kit inicial para ex fumadores.",
    cantidad: 5,
    img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero014_5f88744a-ac47-4a59-841b-f97a119211ed_720x720.webp?v=1660306333",
    alt: "Vaporesso  Gen Nano 80w",
  },
  {
    id: 9,
    nombre: "VOOPOO - DRAG 3  177w",
    precio: 34955,
    descripcion:
      "  El Voopoo Drag 3  el tercer súper mod después de los top ventas Drag 1 y 2, volviendo al profesionalismo y la jugabilidad de DRAG, con una variedad de modos compatibles.",
    cantidad: 2,
    img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero0013_6cc03289-1f28-483d-ab5a-8e3ed5fea545_720x720.webp?v=1672858527",
    alt: "VOOPOO - DRAG 3 ",
  },
  {
    id: 10,
    nombre: "VOOPOO  DRAG S  ",
    precio: 27350,
    descripcion:
      " El Voopoo Drag S adopta el nuevo e increíble conjunto de chips GENE.TT que admite el nuevo modo RANKING DE PUNTUACIÓN y ofrece una velocidad de disparo de 0.001s y una potencia de 60W..",
    cantidad: 5,
    img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero0012_46e2c35b-aacc-4d6a-9e25-2fc2ab9d5edc_720x720.webp?v=1673544530",
    alt: "VOOPOO - DRAG S KIT 60W 2500mAh ",
  },
  {
    id: 11,
    nombre: "VAPORESSO  Luxe II 220W ",
    precio: 50350,
    descripcion:
      " El mod más premium de Vaporesso y tan querido por gran parte de la comunidad se actualiza para incorporar todo lo bueno del viejo Luxe y adaptarse a las tendencias y necesidades de vapeo en 2020.",
    cantidad: 1,
    img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/komplet-vaporesso-luxe-2-ii-220w-nrg-s-kit-lava_720x720.webp?v=1668780916",
    alt: "VAPORESSO  Luxe II 220W",
  },
  {
    id: 12,
    nombre: "VOOPOO - Argus GT 160W",
    precio: 33955,
    descripcion:
      "Es el dispositivo ideal para los amantes del aire libre, ya que este dispositivo ofrece un peso liviano, es realmente funcional y está equipado con un chip inteligente. Ofrece hasta 160W de potencia,facil de usar.",
    cantidad: 2,
    img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero01122_464c3f37-49e1-4357-baff-69bfc6283d50_720x720.webp?v=1672833883",
    alt: "VOOPOO - Argus GT 160W",
  },
];

const listaCarrito = []

const contenedor_productos = document.getElementById("contenedor_productos");
const contenedor_carrito = document.getElementById("contenedor_carrito");

listaProductos.forEach( producto => {
  contenedor_productos.innerHTML += ` 
    
    <div class="card" style="width: 18rem; margin-top: 30px; margin-bottom: 10px;">
        <img src="${producto.img}" alt="${producto.alt}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-outline-primary prevent-default" id="vaper${producto.id}">Añadir al carrito</a>
        </div>
    </div>
    
    `
})


function guardarLocalStorage(){

  localStorage.setItem ( "Productos", JSON.stringify( listaProductos ))
}

function obtener_localstorage(){

  let listaProductos = localStorage.getItem( "listaProductos" )
 
}
 console.log (listaProductos)



 listaProductos.forEach( producto => {   
    const productoEnEsperaDeSerAnadido = document.getElementById(`vaper${producto.id}`)


    productoEnEsperaDeSerAnadido.addEventListener("click",()=>{
      
         listaCarrito.push(producto)

         //eliminamos todo
    contenedor_carrito.innerHTML = ""
     //mostramos tod     
     
     listaCarrito.forEach( producto => { 

         contenedor_carrito.innerHTML += `

         <div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src="${producto.img}" class="img-fluid w-100" alt="${producto.alt}">
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text"><$${producto.precio}></p>
      </div>
    </div>
  </div>
</div>
     `
     })


 })

})


