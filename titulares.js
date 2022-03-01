//Se crea una variable para que recoga todos los selectores del documento html
//Esto se hace con querySelectorAll que recográ todos los selectores de la página
//Tenemos que tener claro cual es el id de los selectores de los titulares
//esto se hace con el inspector en chrome, le damos a insepccionar en un titular
//veremos a que clase pertenece los titulares, estan en un h2 y tiene una clase
//con un id de c_t
const titulares = document.querySelectorAll('.c_t');

//se crean dos variables, una para el texto que aparecerá primero en el alert
//y otra para separar cada titular del siguiente
let alerta ='TITULARES DEL PERIÓDICO: \n';
let variable = '------------------';

//Hacemos ahora un bucle para que vaya recorriendo todos los selectores de los titualres
//La variable titualres es como un array con los titulares de la web y la recorremos con un bucle
//concatenamos el texto inicial con el contenido de los titulares y ponemos saltos de línea para que se vea todo bien
for (const titular of titulares){
    alerta = alerta + titular.textContent+ '\n' +  variable+ '\n';
}
//Para finalizar mostramos con un alert todos los titulares
alert(alerta);
//Para confirmar hacemos un console.log para que nos muestre por consola los resultados
console.log(alerta);