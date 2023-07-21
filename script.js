
const SELECT = document.getElementById('km','cm','dm')
const BUTTON = document.getElementById("convertir");
const INPUTmts = document.getElementById("mts");
const INPUTselect = document.getElementById("select");
const ERROR = document.getElementById("error");
const RESULTADO = document.getElementById('resultado')
BUTTON.addEventListener("click", convertir);


function convertir() {
    let unidad = INPUTmts.value
    let unidad_de_medida = INPUTselect.value
    console.log(unidad)
    console.log(unidad_de_medida)
    if (unidad =='') {
        console.log('vacio')
    }
    let error = INPUTmts.value
    if (error <= 0){
        console.log('error')
    }
    if (unidad >= 1){
        console.log(conversor(unidad))
        RESULTADO.style.display = "inline-block"
        RESULTADO.innerHTML = `${conversor(unidad).toFixed(1)} km`;
    }
    if (unidad_de_medida == "dm"){
        console.log(decimetro(unidad))
        RESULTADO.style.display = "inline-block"
        RESULTADO.innerHTML = `${decimetro(unidad).toFixed(1)} dm`;
    }
    if(unidad_de_medida == "cm"){
        console.log(centimetro(unidad))
        RESULTADO.style.display = "inline-block"
        RESULTADO.innerHTML = `${centimetro(unidad).toFixed(1)} cm`;
    }

   
    // console.log(INPUTmts.value)    
     
}

function conversor(unidad){
    let conversor = 0;
    if (unidad >= 1 ){
     conversor = (unidad * 0.001)
    }
   return (conversor)
}


function decimetro(unidad){
    let decimetro = 0;
    if(unidad >= 1){
        decimetro = (unidad * 10)
    }
    return (decimetro)
}

function centimetro(unidad){
    let centimetro = 0;
    if(unidad >= 1){
        centimetro = (unidad * 100)
    }
    return (centimetro)
}

