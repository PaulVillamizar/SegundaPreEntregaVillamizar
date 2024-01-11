// Objeto para representar un producto
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

// Array para almacenar productos
const inventario = [];

// Función para agregar un nuevo producto al inventario
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad en stock:"));

    if (!isNaN(precio) && !isNaN(cantidad)) {
        const nuevoProducto = new Producto(nombre, precio, cantidad);
        inventario.push(nuevoProducto);
        console.log(`Producto "${nombre}" agregado al inventario.`);
    } else {
        console.log("Por favor, ingrese información válida para el producto.");
    }
}

// Función para mostrar el inventario de productos
function mostrarInventario() {
    console.log("Inventario de productos:");
    inventario.forEach(producto => {
        console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}`);
    });
}

// Función para buscar un producto por nombre
function buscarProductoPorNombre() {
    const nombreABuscar = prompt("Ingrese el nombre del producto a buscar:");
    const productoEncontrado = inventario.find(producto => producto.nombre === nombreABuscar);

    if (productoEncontrado) {
        console.log(`Producto encontrado: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio.toFixed(2)}, Cantidad: ${productoEncontrado.cantidad}`);
    } else {
        console.log(`Producto "${nombreABuscar}" no encontrado.`);
    }
}

// Función para filtrar productos por precio
function filtrarProductosPorPrecio() {
    const precioMaximo = parseFloat(prompt("Ingrese el precio máximo para filtrar productos:"));

    if (!isNaN(precioMaximo)) {
        const productosFiltrados = inventario.filter(producto => producto.precio <= precioMaximo);

        if (productosFiltrados.length > 0) {
            console.log(`Productos con precio hasta $${precioMaximo.toFixed(2)}:`);
            productosFiltrados.forEach(producto => {
                console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}`);
            });
        } else {
            console.log(`No hay productos con precio hasta $${precioMaximo.toFixed(2)}.`);
        }
    } else {
        console.log("Por favor, ingrese un precio válido.");
    }
}

// Agregar algunos productos de ejemplo
agregarProducto();
agregarProducto();
agregarProducto();
agregarProducto();
agregarProducto();

// Mostrar el inventario de productos
mostrarInventario();

// Buscar un producto por nombre
buscarProductoPorNombre();

// Filtrar productos por precio
filtrarProductosPorPrecio();
