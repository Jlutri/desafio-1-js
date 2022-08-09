let entrada = prompt ("Desea recibir notificaciones sobre esta pagina?");
if ((entrada == "Si") || (entrada == "si")){
    alert ("notificaiones activadas");
    function solicitarNombre(){
        let nombreIngresado = prompt ("Ingresar Nombre")
        alert ("el nombre ingresado es " + nombreIngresado)
        let apellidoIngresado = prompt ("Ingresar apellido")
        alert  ("Apellido ingresado " + apellidoIngresado)
        alert ("Hola " + nombreIngresado + apellidoIngresado)
    }
    solicitarNombre ();
    function solicitarEdad(){
        let ingresarEdad = prompt ("Ingrese su edad")
        alert ("La edad ingresada es " + ingresarEdad)
    }
    solicitarEdad ();
}else{
    alert ("Notificaciones canceladas")
}
alert ("los productos son: \n 1) Parrilla movil \n 2) Mesa movil \n 3)Mesa living ");
let elegirProducto = prompt("Que producto quiere?")
class anthonyWoods{
    constructor(muebles, precio, diseño){
        this.muebles = muebles;
        this.precio = precio;
        this.diseño = diseño;
    }
    mostrar_decription_completa(){
        return this.description + " $ " + this.precio ;

    }

}

let woods_nuevo = new Array();
woods_nuevo.push(new anthonyWoods("Parrilla movil",15000,"Rustico"));
woods_nuevo.push(new anthonyWoods("Mesa movil",10000,"Rustico"));
woods_nuevo.push(new anthonyWoods("Mesa living",7000,"Casero"));
woods_nuevo.push(new anthonyWoods("hamaca",20000,"clasico"));

let respuesta = prompt ("que opcion desea regresar? \n 1) Ver los productos \n 2) revisar la compra \n 3) cambiar el producto") ;
if(respuesta == "1"){
    //alert("Los productos son: " + anthonyWoods.join(" \n "));
    alert("Los productos son " +mostrar_description())
}else if (respuesta == "2"){
    alert ("la compra es " + respuesta);
}else if (respuesta == "3"){
    let producto = prompt ("Ingrese el producto que desea cambiar");
    let indice = anthonyWoods.indexOf(producto);
    if (indice >= 0){
        let nuevoProducto = prompt("ingrese un nuevo producto")
        anthonyWoods[indice].diseño = nuevoProducto
    }else{
        alert("el producto ingresado no es valido")
    }
}

function motrar_description(){
    let wProductos = "";
    for (let i = 0 ; i< anthonyWoods.length;i++){
        stock += anthonyWoods[i].mostrar_description_entera();
    }
    return wProductos;
}
