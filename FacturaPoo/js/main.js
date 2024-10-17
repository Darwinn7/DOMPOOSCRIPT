import Producto from "../js/producto.js";
import Factura from "../js/factura.js";

document.getElementById(`facturaForm`).addEventListener(`submit`,function(event){
    event.preventDefault();


//capturar los valores del formulario dentro de una constante
const nombreProducto = document.getElementById(`producto`).value
const cantidad = parseFloat(document.getElementById(`cantidad`).value)
const precio =  parseFloat(document.getElementById(`precio`).value)
const descuento=  parseFloat(document.getElementById(`descuento`).value || 0)

// crear el objeto  producto
const producto = new Producto(nombreProducto,cantidad,precio)

///  crear el objeto factura
const factura = new Factura(producto,descuento)

document.getElementById(`resultado`).innerHTML= factura.generarFactura();


})

