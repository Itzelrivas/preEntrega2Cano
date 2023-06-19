//Creamos la class constructor para estructurar los productos
class Producto{
    constructor(productoI, categoriaI, marcaI, precioI, tallaI){
        this.producto = productoI,
        this.categoria = categoriaI,
        this.marca = marcaI,
        this.precio = precioI,
        this.talla = tallaI
    }
    mostrarInfoProducto(){
        if(this.categoria.toLowerCase() == "bolsa"){
            console.log(`La ${this.producto} es de la marca ${this.marca}, tiene un precio de ${this.precio} pesos y tiene unas dimensiones aproximadas de ${this.talla}`)
        }
        else if(this.categoria.toLowerCase() == "vestido"){
            console.log(`El ${this.producto} es de la marca ${this.marca}, tiene un precio de ${this.precio} pesos y es talla ${this.talla}`)
        }
        else if(this.categoria.toLowerCase() == "camisas"){
            console.log(`La ${this.producto} es de la marca ${this.marca}, tiene un precio de ${this.precio} pesos y es talla ${this.talla}`)
        }
        else {
            console.log(`Los ${this.producto} son de la marca ${this.marca}, tiene un precio de ${this.precio} pesos y son talla ${this.talla}`)
        }
    }
}


//Inicializamos algunos productos
const producto1 = new Producto("Vestido de rayas azul con amarillo", "vestido", "Tommy Hilfiger", 600, "mediana")
const producto2 = new Producto("Vestido de azul con rosa y corte v", "vestido", "Tommy Hilfiger", 650, "mediana")
const producto3 = new Producto("Vestido formal color mostaza", "vestido", "Tommy Hilfiger", 800, "grande")
const producto4 = new Producto("Vestido azul", "vestido", "Guess", 550, "chico")
const producto5 = new Producto("Vestido rosa con blanco", "vestido", "Michael Kors", 950, "6")
const producto6 = new Producto("Vestido negro", "vestido", "Guess", 800, "chico")
const producto7 = new Producto("Bolsa Crossbody azul", "bolsa", "Tommy Hilfiger", 650, "20cm * 18cm * 15cm")
const producto8 = new Producto("Bolsa Crossbody negra", "bolsa", "Nautica", 550, "25cm * 15cm * 12cm")
const producto9 = new Producto("Bolsa Crossbody roja", "bolsa", "Karl Marx", 850, "8cm * 15cm * 1.5cm")
const producto10 = new Producto("Mochila azul", "bolsa", "Karl Marx", 1050, "20cm * 30cm * 15cm")
const producto11 = new Producto("Bolsa Crossbody café", "bolsa", "Karl Marx", 850, "8cm * 15cm * 1.5cm")
const producto12 = new Producto("Cartera azul", "bolsa", "Tommy Hilfiger", 600, "9cm * 7.5cm * 2cm")
const producto13 = new Producto("Tenis blancos con detalles en negro", "zapatos", "Tommy Hilfiger", 800, "27")
const producto14 = new Producto("Sandalias beige", "zapatos", "Guess", 850, "25")

//Creamos nuestro catálogo y la función para agregar más productos posteriormente
const catalogo = []
catalogo.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14)
function masProducto() {
    let nuevoProducto = prompt("Ingrese el nuevo producto")
    let nuevoCategoria = prompt("Ingrese a que categoría pertenece: Vestido, bolsa, zapatos, camisa")
    let nuevoMarca = prompt("Ingrese la marca del nuevo producto")
    let nuevoPrecio = parseInt(prompt("Ingrese el precio del nuevo producto"))
    let nuevoTalla = prompt("Ingrese el tamaño o la talla del nuevo producto")
    const productoNuevo = new Producto(nuevoProducto, nuevoCategoria, nuevoMarca, nuevoPrecio, nuevoTalla)
    catalogo.push(productoNuevo)
}

//Desarrollamos las funciones para mostrar el catálogo, buscar por categoría, por rango de precios y ordenar de menor a mayor precio, respectivamente
function mostrarCatalogo(array){
    console.log(`Los productos que en el momento tenemos disponibles, son:`)
    array.forEach(
        producto => producto.mostrarInfoProducto()
    )
}

function buscarPorPrecio (array){
    let precioRequerido = parseInt(prompt("Ingrese su presupesto (precio) para mostrarle productos que estan dentro él"))
    let buscar = array.filter(
        (Producto) => Producto.precio <= precioRequerido
    )
    if (array.length == 0){
        console.log("Por el momento, no tenemos ningún producto que este dentro de tu precio, lo sentimos mucho, pero no te preocupes, cada dos semanas agregamos más productos :)")
    }
    else{
        mostrarCatalogo(buscar)
    }
}

function buscarPorCategoria (array){
    let categoriaRequerida = prompt("Ingrese la categoría que le gustaría buscar, recuerda que dividimos todos nuestros productos en vestidos, zapatos, bolsas y camisas")
    let buscar = array.filter(
        (Producto) => Producto.categoria.toLowerCase() == categoriaRequerida.toLowerCase()
    )
    if (array.length == 0){
        console.log("¡Oh no! Todos los productos de esta categoría se han agotado, pero no te preocupes, cada dos semanas agregamos más productos :)")
    }
    else{
        mostrarCatalogo(buscar)
    }
}

function ordenarAscendentemente (array){
    const menorMayor = [].concat(array)
    menorMayor.sort ((a,b) => a.precio - b.precio)
    mostrarCatalogo (menorMayor)
}

//Menú
function menu(){
    let contraseña = "090911"
    let salir = false
    do{
        let opcionElegida = parseInt(prompt(`Elige el número que representa la opción que quiere realizar:
        1 - Ver catálogo de todos los productos disponibles
        2 - Filtrar por precio
        3 - Filtrar por categoría: vestido, bolsa, zapatos o camisas
        4 - Ordenar todos los productos de menor a mayor precio
        5 - Tramitar descuento de primera compra
        6 - Agregar nuevos productos
        7 - Eliminar productos agotados
        8 - Salir del menú`))
        switch(opcionElegida){
            case 1:
                mostrarCatalogo(catalogo)
            break
            case 2:
                buscarPorPrecio(catalogo)
            break
            case 3:
                buscarPorCategoria(catalogo)
            break
            case 4:
                ordenarAscendentemente(catalogo)
            break
            case 6:
                masProducto()
            break
            case 8:
                console.log(`¡Gracias por interesarte en nuestros productos! Recuerda que puedes contactarnos al númerp 469 879 8736`)
                salir = true
            break
            default:
                console.log(`Esa opción no es válida, vuelve a intentarlo`)
            break
        }
    }while(!salir)
}
menu()