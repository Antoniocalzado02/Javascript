function inicializar(){
    let u=0;
    let i=0;
    let nom;
    let array=[];
    let array2=[];
        while (i<5){
            nom=prompt("Dime un nombre");
            if(array.includes(nom)){
                while (array.includes(nom)){
                    console.log("El nombre esta repetido");
                    nom=prompt("Introduce otro nombre diferente");
                }
                array[i]=nom;
                i++;
            }else{
                array[i]=nom;
                i++;
            }
        }
        console.log(array);
        while (u<array.length){
            array2[u]=array[u].charAt(0);
            u++;
        }
        array2.sort();
        console.log(array2);
}
