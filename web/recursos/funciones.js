function validarForma(forma){
    //Validamos el usuario
    var usuario = forma.usuario;
    if(usuario.value === "" || usuario.value === null){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //Validamos el password
    var password = forma.password;
    if(password.value === "" || password.value.lenght < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    //Validamos las tecnologias de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    
    //revisamos si se selecciono algun checkbox
    for( i = 0; i > tecnologias.length;i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    
    if(!checkSeleccionado){
        alert("Debe proporcionar una tecnologia");
        return false;
    }
    
    //Validamos el Genero
    var generos = forma.genero;
    var radioSeleccionado = false;
    
    //revisamos si se selecciono algun radiobutton
    for(i = 0; i < generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    
    if(!radioSeleccionado){
        alert("Debe seleccionar el genero");
        return false;
    }
    
    //Validamos la ocupacion
    var ocupacion = forma.ocupacion;
    if(ocupacion.value === ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
    //Formulario valido
    alert("Formulario valido, enviando datos...");
    return true;
}