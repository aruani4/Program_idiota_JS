//promblem A, una fiesta oara la gente
//dejar pasar solo a los mayores de edad
//el primero que entre despues de las 2am no paga

let free= false;

const validarCliente = (time)=>{
    let edad= prompt('cual es tu edad?');
    if (edad >= 18){
        if(time >= 2 && time < 7 && free==false){
            alert('usted pasa gratis, es el primero que llego despues de las 2');
            free = true;
        } else {
            alert('podes pasar, paga la entrada');
        }

    }else{
        alert('mira negrito sos muy joven no pasas al boliche');
    }
}

validarCliente(23);
validarCliente(0.30);
validarCliente(2);
validarCliente(11);
validarCliente(6);
validarCliente(2.1);


//problem B, se rompio maquina de asistencia
//crear un mini sistema que nos permita registrar a los alumnos presentes(p) y ausentes(a)
//pasados los 30 dias la situacion final del alumno
//maximo 10% de ausencias
// crear una calculadora que nos simplifique el trabajo


let cantidad = prompt('cuantos alumnos son?');
let alumnosTotales= [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt('Nombre del alumno ' + (i+1)),0];
}

const tomarASistencia = (nombre, posicion)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P" ) {
       alumnosTotales[posicion][1]++; 
    }
}

//para ejecutar 30 veces bucle, son los 30dias que se toma asistencia
for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarASistencia(alumnosTotales[alumno][0], alumno);
    }
}

//mostrando situacion final de todos los alumnos
//encontrar nombre alumno: (alumnosTotales[alumno][0])
// utilizo el 18 pq es el 10% de 180 dias que es loq ue tiene un semestre
for(alumnos in alumnosTotales) {
    let resultado = `${(alumnosTotales[alumno][0])}:<br>
    _____Presentes: ${(alumnosTotales[alumno][1])}<br>
    _____Ausentes: ${(30 - alumnosTotales[alumno][1])}<br>  
     `;
     if (30 - alumnosTotales[alumno][1] > 18){
        resultado+="<b>Reprobado por inasistencia</b><br><br>";
     }else {
        resultado+= "<br><br>"
     } document.write(resultado)
}






