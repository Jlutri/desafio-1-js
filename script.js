let entrada = prompt("Desea recibir notificaciones sobre esta pagina?");
if ((entrada == "Si") || (entrada == "si")){
    alert("Notificaciones activadas");
    function solicitarNombre() {
        let nombreIngresado = prompt("ingresar nombre")
        alert ("el nombre ingresado es " + nombreIngresado)
        let apellidoIngresado = prompt(" ingresar apellido")
        alert ("Nombre y apellido ingresados " + nombreIngresado +  apellidoIngresado)
        alert ("Bienvenido " + nombreIngresado + apellidoIngresado)
        }
        
        solicitarNombre();
        
        function solicitarEdad() {
        let edadIngresada = prompt ("Ingresar Edad")
        alert ("La edad ingresada es " + edadIngresada)
        solicitarEdad () ;
    }

        let muebles = prompt("Conoce la pagina de anthony woods?")
        if((muebles  == "si") || (muebles == "Si")){
            alert("Ingrese su usuario");
        }else{
            alert("ingrese a www.anthony woods.com y registrate");
        }
            
        
        
        
        
        
        
}else {
        alert("Notificaciones canceladas");
    }



