function annadirEmpleado(){
    let numero=prompt("Numero de empleado");
    let dni=prompt("DNI del empleado");
    let nombre=prompt("Nombre del empleado");
    let apellidos=prompt("Apellidos del empleado");

    let tabla=document.getElementById("tabla");
    
    let columna1=document.createElement("td");
    let columna2=document.createElement("td");
    let columna3=document.createElement("td");
    let columna4=document.createElement("td");

    columna1.appendChild(document.createTextNode(numero));
    columna2.appendChild(document.createTextNode(dni));
    columna3.appendChild(document.createTextNode(nombre));
    columna4.appendChild(document.createTextNode(apellidos));

    let fila=document.createElement("tr");
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);

    tabla.appendChild(fila);

    let numEmpleado=document.getElementById("numEmpleados");
    numEmpleado.textContent=parseInt(numEmpleado.textContent)+1;

}

function borrarEmpleado(){
     let dni=prompt("Introduce el DNI del empleado que quieres borrar");
    let borrado=false;
    let tabla=document.getElementById("tabla");

    let arrayFilas=tabla.getElementsByTagName("tr");

    for(let i=0; i<arrayFilas.length; i++){
        let columnas=arrayFilas[i].getElementsByTagName("td");
        for (let j=0; j<columnas.length; j++){
            let cadena=columnas[j].textContent;
            if (cadena==dni){
                filaBorrar=arrayFilas[i];
                borrado=true;
            }
        }
    }
    if (borrado==true){
        let numEmpleado=document.getElementById("numEmpleados");
        numEmpleado.textContent=parseInt(numEmpleado.textContent)-1;
        filaBorrar.remove();
        
    }
    else{
        alert("NO EXISTE");
    }
    
}

function editarEmpleado(){
    let dni=prompt("Introduce el DNI del empleado que quieres borrar");
    let encontrado=false;
    let tabla=document.getElementById("tabla");

    let arrayFilas=tabla.getElementsByTagName("tr");

    for(let i=0; i<arrayFilas.length; i++){
        let columnas=arrayFilas[i].getElementsByTagName("td");
        for (let j=0; j<columnas.length; j++){
            let cadena=columnas[j].textContent;
            if (cadena==dni){
                filaBorrar=arrayFilas[i];
                encontrado=true;
            }
        }
    }
    if(encontrado==true){
        alert("Este usuario puede ser editado");
    }else{
        alert("No puede ser editado");
    }
}





