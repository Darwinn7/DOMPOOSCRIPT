class Factura{
    constructor(producto,descuento){
        this.producto = producto;
        this.descuento = descuento;
        this.iva =0.19

    }
    calcularDescuento(){
        return  this.producto.calcularSubTotal()  * this.descuento/100

    }
    calcularIva(){
        return (this.producto.calcularSubTotal()- this.calcularDescuento())* this.iva
    }

    calcularTotal(){
        return this.producto.calcularSubTotal() -  this.calcularDescuento() + this.calcularIva()

    }
    generarFactura(){
      return `
      <p><strong>Subtotal</strong> ${this.producto.calcularSubTotal()}</p>
      <p><strong>Descuento</strong> ${this.calcularDescuento()}</p>
      <p><strong>Iva</strong> ${this.calcularIva()}</p>
      <p><strong>Total</strong> ${this.calcularTotal()}</p>

      `
        
    }
    
}
export default  Factura;
