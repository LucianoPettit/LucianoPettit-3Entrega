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