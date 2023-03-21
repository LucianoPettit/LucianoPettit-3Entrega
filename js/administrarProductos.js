let listaProductos = [
    {id:1, nombre:"Kit GeekVape Aegis Hero", precio: 18000, descripcion: "Geekvape Aegis Hero es un kit de mod de cápsula de sub ohmios que funciona con una batería de 1200 mAh con una salida máxima de 45 W.", cantidad: 3, img: "https://www.tiendavapor.com/image/cache/catalog/GeekVape/geekvape-aegis-hero-500x500.jpeg", alt: "Kit GeekVape Aegis Hero"},
    {id:2, nombre:"Kit Vaporesso Luxe II", precio: 37890, descripcion: "Luxe II es una versión mejorada de Luxe S, con Tank actualizado de Skrr-S Tank a NRG-S Tank, equipado con bobinas GT Mesh,uno de los mejores kits.", cantidad: 4, img: "https://www.tiendavapor.com/image/cache/catalog/vaporesso/luxeii-500x500.jpg", alt: "Kit Vaporesso Luxe II"},
    {id:3, nombre:"VAPORESSO SWAG KIT", precio: 25170, descripcion: "El Vaporesso Swag Kit 80 W es alimentado por una sola batería de 18650 con 2 amperios de carga rápida (INCLUIDA). Es un MOD pequeño y comodo.", cantidad: 9, img: "https://cdn.shopify.com/s/files/1/0271/3786/7820/products/vaporessoswag2a_500x.jpg?v=1664749748", alt: "VAPORESSO SWAG KIT"},
    {id:4, nombre:"VAPORESSO SWAG PX80", precio: 37580, descripcion: "El innovador Vaporesso Swag PX80 Kit tiene una potencia máxima de salida de 80W que nos proporciona un sabor excelente a través de las resistencias GTX.", cantidad: 2, img: "https://rosariovapeshop.com/wp-content/uploads/2022/09/1000004869.jpg", alt: "VAPORESSO SWAG PX80"},
    {id:5, nombre:"ELEAF ISTICK PICO 25", precio: 17500, descripcion: "Eleaf continúa con su larga racha de excelentes equipos con la mejor calidad y confiabilidad. El nuevo iStick Pico 25 es un cigarrillo electrónico compacto,tiene buena bateria.", cantidad: 9, img: "https://static.wixstatic.com/media/002a61_7bb04b15a74c42b1a3815c2a54d45526~mv2.jpg/v1/fill/w_483,h_483,al_c,q_85,usm_0.66_1.00_0.01/002a61_7bb04b15a74c42b1a3815c2a54d45526~mv2.jpg", alt: "ELEAF ISTICK PICO 25"},
    {id:6, nombre:"SMOK STICK PRINCE", precio: 37500, descripcion: "Smok vuelve con una tremenda innovación, el Stick Prince combina una poderosa batería de 3000 mAh con el atomizador TFV12 Prince, que adopta un sistema de llenado superior.", cantidad: 5, img: "https://provaping.com/wp-content/uploads/2018/06/stick-prince.jpg", alt: "SMOK STICK PRINCE"},
    {id:7, nombre:"VOOPOO - DRAG X 80W", precio: 23977, descripcion: "VooPoo presenta Drag X, una nueva y mejorada variación de cápsulas portátiles de la aclamada serie Drag. El Drag X cuenta con una batería 18650 intercambiable.", cantidad: 3, img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero001_15f84611-a470-4ff7-9a45-10db0178d334_720x720.webp?v=1661873631", alt: "VOOPOO - DRAG X 80W"},
    {id:8, nombre:"Vaporesso  Gen Nano 80w", precio: 28530, descripcion: "El Vaporesso Gen Nano es un mod electrónico compacto que contiene una batería integrada de 2000 mAh. Capaz de entregar 80 vatios, es un hermoso kit inicial para ex fumadores.", cantidad: 3, img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero014_5f88744a-ac47-4a59-841b-f97a119211ed_720x720.webp?v=1660306333", alt: "Vaporesso  Gen Nano 80w"},
    {id:9, nombre:"VOOPOO - DRAG 3 ", precio: 34955, descripcion: "El Voopoo Drag 3  el tercer súper mod después de los top ventas Drag 1 y 2, volviendo al profesionalismo y la jugabilidad de DRAG, con una variedad de modos compatibles.", cantidad: 7, img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero0013_6cc03289-1f28-483d-ab5a-8e3ed5fea545_720x720.webp?v=1672858527",alt: "VOOPOO - DRAG 3 "},
    {id:10,nombre: "VOOPOO  DRAG S", precio: 27350, descripcion: "El Voopoo Drag S adopta el nuevo e increíble conjunto de chips GENE.TT que admite el nuevo modo RANKING DE PUNTUACIÓN y ofrece una velocidad de disparo de 0.001s y una potencia de 60W", cantidad: 2, img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero0012_46e2c35b-aacc-4d6a-9e25-2fc2ab9d5edc_720x720.webp?v=1673544530",alt: "VOOPOO  DRAG S"},
    {id:11,nombre: "VAPORESSO  Luxe II 220W ", precio: 50350, descripcion: "El mod más premium de Vaporesso y tan querido por gran parte de la comunidad se actualiza para incorporar todo lo bueno del viejo Luxe y adaptarse a las tendencias y necesidades de vapeo en 2020.", cantidad: 4, img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/komplet-vaporesso-luxe-2-ii-220w-nrg-s-kit-lava_720x720.webp?v=1668780916",alt: "VAPORESSO  Luxe II 220W"},
    {id:12,nombre: "VOOPOO - Argus GT 160W", precio: 33955, descripcion: "Es el dispositivo ideal para los amantes del aire libre, ya que este dispositivo ofrece un peso liviano, es realmente funcional y está equipado con un chip inteligente. Ofrece hasta 160W de potencia,facil de usar.", cantidad: 2, img: "https://cdn.shopify.com/s/files/1/0562/9296/6584/products/Numero01122_464c3f37-49e1-4357-baff-69bfc6283d50_720x720.webp?v=1672833883",alt: "VOOPOO - Argus GT 160W"}
]

const arrEnFormatoJSON = JSON.stringify(listaProductos)

localStorage.setItem("listaProductos",arrEnFormatoJSON)

/*let listaProductos;
let obtenerListaJSON = localStorage.getItem("listaProductos")

if(obtenerListaJSON){
    listaProductos = JSON.parse(obtenerListaJSON)
    
}else{
    listaProductos = []
}

console.log(listaProductos)

const form = document.getElementById("formulario")


form.addEventListener("submit", (e) => {

    e.preventDefault()

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value

    listaProductos.push({id:id,nombre:nombre,precio:precio,descripcion:descripcion})

    const listaProductosJSON = JSON.stringify( listaProductos )

    localStorage.setItem("listaProductos",listaProductosJSON)

    form.reset()

    console.log(listaProductos)
})
*/