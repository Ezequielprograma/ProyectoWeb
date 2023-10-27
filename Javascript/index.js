const dolar=350;

function pesificar(){
    var peticion = new XMLHttpRequest();//(1)
    peticion.open('GET','https://api.bluelytics.com.ar/v2/latest'/*(3)*/);//(2)

    peticion.onload = function (){//4
        if (peticion.status == 200){
            var datos = JSON.parse(peticion.response) //(5)
            
            document.getElementById('precio_final').innerHTML = "$ " + (datos.blue.value_sell* dolar);//(6)
            console.log(datos.blue.value_sell)
        }
    };
    peticion.send();
};

function dolarizar(){
    document.getElementById('precio_final').innerHTML = "$ " + dolar;
}





//1-Objeto de la petición
//2-solicitud de conección
//3-dirección de la pagina
//4-funcion que se va a ejecutar cuando los datos lleguen
//5-transformamos datos de js a codigo JSON
//6-Colocamos lo que nos entrego el servidor en un mensaje HTML en su ID