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
        if(this.categoria.toLowerCase() == "bolsas"){
            console.log(`La ${this.producto} es de la marca ${this.marca}, tiene un precio de ${this.precio} pesos y tiene unas dimensiones aproximadas de ${this.talla}`)
        }
        else if(this.categoria.toLowerCase() == "vestidos"){
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
const producto1 = new Producto("Vestido de rayas azul con amarillo", "vestidos", "Tommy Hilfiger", 600, "mediana")
const producto2 = new Producto("Vestido de azul con rosa y corte v", "vestidos", "Tommy Hilfiger", 650, "mediana")
const producto3 = new Producto("Vestido formal color mostaza", "vestidos", "Tommy Hilfiger", 800, "grande")
const producto4 = new Producto("Vestido azul", "vestidos", "Guess", 550, "chico")
const producto5 = new Producto("Vestido rosa con blanco", "vestidos", "Michael Kors", 950, "6")
const producto6 = new Producto("Vestido negro", "vestidos", "Guess", 800, "chico")
const producto7 = new Producto("Bolsa Crossbody azul", "bolsas", "Tommy Hilfiger", 650, "20cm * 18cm * 15cm")
const producto8 = new Producto("Bolsa Crossbody negra", "bolsas", "Nautica", 550, "25cm * 15cm * 12cm")
const producto9 = new Producto("Bolsa Crossbody roja", "bolsas", "Karl Marx", 850, "8cm * 15cm * 1.5cm")
const producto10 = new Producto("Mochila azul", "bolsas", "Karl Marx", 1050, "20cm * 30cm * 15cm")
const producto11 = new Producto("Bolsa Crossbody café", "bolsas", "Karl Marx", 850, "8cm * 15cm * 1.5cm")
const producto12 = new Producto("Cartera azul", "bolsas", "Tommy Hilfiger", 600, "9cm * 7.5cm * 2cm")
const producto13 = new Producto("Tenis blancos con detalles en negro", "zapatos", "Tommy Hilfiger", 800, "27")
const producto14 = new Producto("Sandalias beige", "zapatos", "Guess", 850, "25")

//Creamos nuestro catálogo y la función para agregar más productos posteriormente
const catalogo = []
catalogo.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14)
function masProducto() {
    let nuevoProducto = prompt("Ingrese el nuevo producto")
    let nuevoCategoria = prompt("Ingrese a que categoría pertenece: vestidos, bolsas, zapatos ó camisas")
    let nuevoMarca = prompt("Ingrese la marca del nuevo producto")
    let nuevoPrecio = parseInt(prompt("Ingrese el precio del nuevo producto"))
    let nuevoTalla = prompt("Ingrese el tamaño o la talla del nuevo producto")
    const productoNuevo = new Producto(nuevoProducto, nuevoCategoria, nuevoMarca, nuevoPrecio, nuevoTalla)
    catalogo.push(productoNuevo)
}

//Desarrollamos las funciones para mostrar el catálogo, buscar por categoría, por rango de precios, ordenar de menor a mayor precio y eliminar productos, respectivamente
function mostrarCatalogo(array){
    console.log(`Los productos que en el momento tenemos disponibles, son:`)
    array.forEach(
        producto => producto.mostrarInfoProducto()
    )
}

function buscarPorPrecio (array){
    let precioRequerido = parseInt(prompt(`Ingrese su presupesto (precio) para mostrarle productos que estan dentro él`))
    let buscar = array.filter(
        (Producto) => Producto.precio <= precioRequerido
    )
    if (buscar.length == 0){
        console.log(`Por el momento, no tenemos ningún producto que este dentro de tu precio, lo sentimos mucho, pero no te preocupes, cada dos semanas agregamos más productos :)`)
    }
    else{
        mostrarCatalogo(buscar)
    }
}

function buscarPorCategoria (array){
    let categoriaRequerida = prompt(`Ingrese la categoría que le gustaría buscar, recuerda que dividimos todos nuestros productos en vestidos, zapatos, bolsas y camisas`)
    let buscar = array.filter(
        (Producto) => Producto.categoria.toLowerCase() == categoriaRequerida.toLowerCase()
    )
    if (buscar.length == 0){
        console.log(`¡Oh no! Todos los productos de la categoría ${categoriaRequerida.toLowerCase()} se han agotado, pero no te preocupes, cada dos semanas agregamos más productos :)`)
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

function eliminarProducto(array){
    let numProducto = parseInt(prompt(`Inserta el número del producto que deseas eliminar:`))
    array.splice (numProducto-1, 1)
}

//Función para descuento de primera compra
const clientes = []
function descuentoPrimeraCompra(){
    let a=0
    let clienteNuevo = prompt(`Introduce tu nombre completo, por favor:`)
    for(let i=0; i < clientes.length; i++)
    {
        if(clientes[i].toLowerCase() == clienteNuevo.toLowerCase())
        {
            console.log(`Lo sentimos, ya has tramitado tu código de descuento por primera compra antes.`)
            a++
            break
        }
    }
    if(a==0){
        console.log(`¡Muchas gracias por interesarte en nuestros productos! Para tu primer compra, usa el código: primCompra${clientes.length + 1} para obtener un 15% de descuento. Recuerda que tu código es válido solamente durante un mes, a partir del día que lo tramitaste.`)
        clientes.push(clienteNuevo)
    }
}

//Menú
function menu(){
    let contraseña = 90911
    let salir = false
    do{
        let opcionElegida = parseInt(prompt(`Elige el número que representa la opción que quiere realizar:
        1 - Ver catálogo de todos los productos disponibles
        2 - Filtrar por precio
        3 - Filtrar por categoría: vestidos, bolsas, zapatos ó camisas
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
            case 5:
                descuentoPrimeraCompra()
            break
            case 6:
                let contraIngresada = parseInt(prompt(`Para poder agregar nuevos productos, es necesario que insertes la contraseña:`))
                if(contraIngresada == contraseña){
                    masProducto()
                }
                else{
                    console.log(`Lo sentimos, parece que no tienes acceso a esta función.`)
                }
            break
            case 7:
                let contraseñaIngresada = parseInt(prompt(`Para poder eliminar productos, es necesario que insertes la contraseña:`))
                if(contraseñaIngresada == contraseña){
                    eliminarProducto(catalogo)
                    mostrarCatalogo(catalogo)
                }
                else{
                    console.log(`Lo sentimos, parece que no tienes acceso a esta función.`)
                }
            break
            case 8:
                console.log(`¡Gracias por interesarte en nuestros productos! Recuerda que puedes contactarnos al número 469 879 8736`)
                salir = true
            break
            default:
                console.log(`Esa opción no es válida, vuelve a intentarlo`)
            break
        }
    }while(!salir)
}
menu()