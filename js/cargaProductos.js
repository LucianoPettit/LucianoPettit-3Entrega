let listaProductos = [
    {id:1, nombre:"ryzen 3 3200g", precio: 120000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_732327-MLA51652630511_092022-O.webp", alt: "imagen ryzen 3"},
    {id:2, nombre:"ryzen 3 3200x", precio: 130000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_732327-MLA51652630511_092022-O.webp", alt: "imagen ryzen 3"},
    {id:3, nombre:"ryzen 5 5600g", precio: 150000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_659520-MLM51338788281_082022-O.webp", alt: "imagen ryzen 5"},
    {id:4, nombre:"ryzen 5 5600x", precio: 160000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_659520-MLM51338788281_082022-O.webp", alt: "imagen ryzen 5"},
    {id:5, nombre:"ryzen 7 5700g", precio: 1750000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_940934-MLU47593217192_092021-O.webp", alt: "imagen ryzen 7"},
    {id:6, nombre:"ryzen 7 5800x", precio: 180000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_940934-MLU47593217192_092021-O.webp", alt: "imagen ryzen 7"},
    {id:7, nombre:"ryzen 9 5900x", precio: 400000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_858009-MLA31853097041_082019-O.webp", alt: "imagen ryzen 9"},
    {id:8, nombre:"ryzen 9 5800g", precio: 300000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_858009-MLA31853097041_082019-O.webp", alt: "imagen ryzen 9"},
    {id:9, nombre:"intel i3", precio: 90000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_606293-MLA44438099741_122020-O.webp",alt: "imagen intel i3"},
    {id:10,nombre: "intel i5", precio: 100000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_863620-MLA42169584870_062020-O.webp",alt: "imagen intel i5"},
    {id:11,nombre: "intel i7", precio: 150000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_992462-MLA45400406848_032021-O.webp",alt: "imagen intel i7"},
    {id:12,nombre: "intel i9", precio: 200000, descripcion: "Procesador de gama baja", cantidad: 1, img: "https://http2.mlstatic.com/D_NQ_NP_656195-MLA43406757007_092020-O.webp",alt: "imagen intel i9"}
]


// this.listaProductos = [
//     {
//       id: 1,
//       nombre: "Kit GeekVape Aegis Hero",
//       precio: 18000,
//       descripcion:
//         "Geekvape Aegis Hero es un kit de mod de cápsula de sub ohmios que funciona con una batería de 1200 mAh con una salida máxima de 45 W.",
//       cantidad: 1,
//       img: "https://www.tiendavapor.com/image/cache/catalog/GeekVape/geekvape-aegis-hero-500x500.jpeg",
//       alt: "Kit GeekVape Aegis Hero",
//     },
//     {
//       id: 2,
//       nombre: "Kit Vaporesso Luxe II",
//       precio: 37890,
//       descripcion:
//         "Luxe II es una versión mejorada de Luxe S, con Tank actualizado de Skrr-S Tank a NRG-S Tank, equipado con bobinas GT Mesh,uno de los mejores kits.",
//       cantidad: 1,
//       img: "https://www.tiendavapor.com/image/cache/catalog/vaporesso/luxeii-500x500.jpg",
//       alt: "Kit Vaporesso Luxe II",
//     },
//     {
//       id: 3,
//       nombre: "VAPORESSO SWAG KIT",
//       precio: 25170,
//       descripcion:
//         "El Vaporesso Swag Kit 80 W es alimentado por una sola batería de 18650 con 2 amperios de carga rápida (INCLUIDA). Es un MOD pequeño y comodo.",
//       cantidad: 7,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/03/VSAWG.jpg",
//       alt: "VAPORESSO SWAG KIT",
//     },
//     {
//       id: 4,
//       nombre: "VAPORESSO SWAG PX80",
//       precio: 37580,
//       descripcion:
//         "El innovador Vaporesso Swag PX80 Kit tiene una potencia máxima de salida de 80W que nos proporciona un sabor excelente a través de las resistencias GTX.",
//       cantidad: 3,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/03/descarga.jpeg",
//       alt: "VAPORESSO SWAG PX80",
//     },
//     {
//       id: 5,
//       nombre: "ELEAF ISTICK PICO 25",
//       precio: 17500,
//       descripcion:
//         "Eleaf continúa con su larga racha de excelentes equipos con la mejor calidad y confiabilidad. El nuevo iStick Pico 25 es un cigarrillo electrónico compacto,tiene buena bateria. ",
//       cantidad: 10,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/04/408-large_default.jpg",
//       alt: "ELEAF ISTICK PICO 25",
//     },
//     {
//       id: 6,
//       nombre: "SMOK STICK PRINCE",
//       precio: 37500,
//       descripcion:
//         "Smok vuelve con una tremenda innovación, el Stick Prince combina una poderosa batería de 3000 mAh con el atomizador TFV12 Prince, que adopta un sistema de llenado superior.",
//       cantidad: 5,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/03/smok-stick-prince.jpg",
//       alt: "SMOK STICK PRINCE",
//     },
//     {
//       id: 7,
//       nombre: "SMOK X-PRIV KIT",
//       precio: 27350,
//       descripcion:
//         "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
//       cantidad: 9,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
//       alt: "SMOK X-PRIV KIT",
//     },
//     {
//       id: 7,
//       nombre: "SMOK X-PRIV KIT",
//       precio: 27350,
//       descripcion:
//         "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
//       cantidad: 1,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
//       alt: "SMOK X-PRIV KIT",
//     },
//     {
//       id: 7,
//       nombre: "SMOK X-PRIV KIT",
//       precio: 27350,
//       descripcion:
//         "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
//       cantidad: 2,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
//       alt: "SMOK X-PRIV KIT",
//     },
//     {
//       id: 7,
//       nombre: "SMOK X-PRIV KIT",
//       precio: 27350,
//       descripcion:
//         "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
//       cantidad: 2,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
//       alt: "SMOK X-PRIV KIT",
//     },
//     {
//       id: 7,
//       nombre: "SMOK X-PRIV KIT",
//       precio: 27350,
//       descripcion:
//         "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
//       cantidad: 6,
//       img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
//       alt: "SMOK X-PRIV KIT",
//     },
//     {
//     id: 7,
//     nombre: "SMOK X-PRIV KIT",
//     precio: 27350,
//     descripcion:
//         "El Smok X- Priv Kit, es un starter kit con mod que presenta un diseño moderno y estilizado capaz de disparar hasta 225 watts y con una pantalla de dos pulgadas personalizable.",
//     cantidad: 1,
//     img: "https://houseofvapecba.com/wp-content/uploads/2019/04/31fH0ajnBOL._SX425_.jpg",
//     alt: "SMOK X-PRIV KIT",
//     },
// ];

const arrEnFormatoJSON = JSON.stringify("listaProductos")


localStorage.setItem("listaProductos",arrEnFormatoJSON)

// let listaProductos;
// let obtenerListaJSON = localStorage.getItem("listaProductos")

// if(obtenerListaJSON){
//     listaProductos = JSON.parse(obtenerListaJSON)
    
// }else{
//     listaProductos = []
// }

// console.log(listaProductos)

// const form = document.getElementById("formulario")


// form.addEventListener("submit", (e) => {

//     e.preventDefault()

//     const id = document.getElementById("id").value
//     const nombre = document.getElementById("nombre").value
//     const precio = document.getElementById("precio").value
//     const descripcion = document.getElementById("descripcion").value

//     listaProductos.push({id:id,nombre:nombre,precio:precio,descripcion:descripcion})

//     const listaProductosJSON = JSON.stringify( listaProductos )

//     localStorage.setItem("listaProductos",listaProductosJSON)

//     form.reset()

//     console.log(listaProductos)
// })