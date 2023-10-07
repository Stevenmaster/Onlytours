/*   crear la función de calcular 
que está en el boton de calcular, que esta en el evento 
onClick, la función es de tipo tradicional 
*/

// sintaxis de la función tradicional

function calcular() {
    // definir las variables como el precio y cantidad

    // se va a tomar el dato del elemento input precio del html 
    let precio = document.simuladorFactura.precio.value;
     // se va a tomar el dato del elemento input cantidad del html
    let cantidad = document.simuladorFactura.cantidad.value;

    // definir el valor del IVA 
    const iva = 0.19;

    // capturar el dato del producto
    producto = document.getElementById('producto').value;

    // validar los campos de precio y cantidad vacios o que están en cero
    // if y else 
    if (precio == 0 || precio == null || cantidad == null || cantidad == 0) {
        // notificar al usuario que digite el precio y cantidad
        alert("Digitar el precio y la cantidad");
        
    }else{
        // definir unas variables para realizar operaciones
        // valor total = cantidad * precio
        let vt = cantidad * precio;
        // determinar el porcenteje del iva de acuerdo al producto y su valor total  vi = vt * iva;
        let vi = vt * iva;
        // determinar el total a pagar con el iva
        let tp = vi + vt;

        // mostrar los datos de las operaciones
        /*
        Tener presente como están definidas las clases e identificadores en los elementos HTML
        */
       // mostrar el producto seleccionado 
       document.getElementById("valorProducto").innerHTML=producto;
      // mostrar el precio simulado por el usuario
      document.getElementById("valorPrecio").innerHTML=precio 
      // mostrar el valor total
      document.getElementById("valorTotal").innerHTML=vt;
      // mostrar el iva
      document.getElementById("valorIva").innerHTML=vi;  
    //   mostrarl total a pagar
      document.getElementById("totalPagar").innerHTML=tp;


    }

}