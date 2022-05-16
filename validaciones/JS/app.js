//VALIDACION DE NOMBRE Y APELLIDO
function validarnombre(){
    let nombre
    nombre=prompt('Ingrese su nombre: ', 'Ejemplo:Kleivin Rodriguez');
    let expReg= /^[a-z ,.'-]+$/i;
    let esValido=expReg.test(nombre);
    
    if(esValido==true){
        console.log('el nombre es correcto');
    } 
    else{
        console.log('el nombre no es correcto');
    }
}
validarnombre()

//VALIDACION DE CORREO ELECTRONICO 
function validarcorreo(){
    let correo
    correo=prompt('Ingrese su correo: ', 'Ejemplo:Kleivin_j@homtail.com');
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido=expReg.test(correo);
    
    if(esValido==true){
        console.log('el correo es correcto');
    } 
    else{
        console.log('el correo no es correcto');
    }
}
validarcorreo()

//VALIDACION DE CEDULA DE IDENTIDAD 
function validarcedula(){
    let cedula;
    cedula=prompt('Ingrese su cedula: ', 'Ejemplo: E- o V-30730304');
    let expReg= /^([VE]-)?\d{1,8}$/i;
    let esValido=expReg.test(cedula);
    
    if(esValido==true){
        console.log('la cedula es correcta');
    } 
    else{
        console.log('la cedula no es correcta');
    }
}
validarcedula()

//VALIDACION DE NUMERO TELEFONICO
function validarnumerodetelefono(){
    let telefono;
    telefono=prompt('Ingrese su numero de telefono: ', 'Ejemplo:0412-333-33-33');
    let expReg= (/^\d{4}-\d{3}-\d{2}-\d{2}$/);
    let esValido=expReg.test(telefono);
    
    if(esValido==true){
        console.log('el telefono es correcto');
    } 
    else{
        console.log('el telefono no es correcto');
    }
}
validarnumerodetelefono()