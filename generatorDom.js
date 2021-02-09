// declaración de variables

// Pedido Actual
let pedido = []
/*
 Crear elemento button
*/
function createButton(p){
    
    let btn = document.createElement('button')
    btn.id=p.cod
    btn.innerText="+ Agregar"
    btn.setAttribute("onClick", "agrearPlato(this.id)")
    btn.style.backgroundColor="green"
    return btn
}

/** crear elemento li*/
function createLi(p){
    let li = document.createElement('li')
    li.innerHTML=`${p.cod} - ${p.nombre} - ${p.precio}€ `
    return li

}
/* Añadir plato seleccionado al pedido */
function agrearPlato(idPlato){
  
    let plato = pedidoDelUsuario(idPlato)
    pedido.push(plato)
    let ul = document.createElement('ul')
    let li = createLi(plato)
    ul.appendChild(li)
    li.innerHTML=`${plato.cod} - ${plato.nombre} - ${plato.precio}€`

    const factura = document.getElementById("totalPedido")
    const total = document.getElementById("precioFinal")
    factura.removeAttribute('hidden')
    
    let totalPrecio = calcularPrecioTotal();
    
    factura.appendChild(ul)
    total.innerText=`Total: ${totalPrecio}€`
    
}
/**  Obtener total de pedido*/
function calcularPrecioTotal(){
    let precio = 0;
    pedido.forEach(plato =>{
        precio+=plato.precio

    })

    return precio;
}

// PEDIDO
const pedidoDelUsuario = elegir => {
    let found = CARTA.find( elem => elem.cod === elegir)
    return found
}
function pintarCarta(){

let ul = document.createElement('ul')
document.body.appendChild(ul)
    CARTA.forEach( plato => {
        let li = createLi(plato)
        let btnAdd  = createButton(plato)
        ul.appendChild(li)
        li.appendChild(btnAdd)
        
    } )
}


pintarCarta();