
console.log("Hola mundo soy juan el guapo!")

//Declaracion de Variables
var nombre: String="Juan";


console.log("Hola," + nombre);
console.log("¿Que tal", nombre ,"?")
console.log(`¿Como han ido las vaciones, ${nombre}?`)

let email = "juanpablogonzalez@gmial.com"; //Variable de ámbito local
console.log(`El email de ${nombre} es ${email}`);

const PI:number = 3.1416

var apellidos: any = "Gonzalez"; // Tipo any hace que la variable pueda cambiar de tipo

var error:boolean;
error = false;

console.log(`¿Hay error?: ${error}`);

//Instanciacion multiple de variables

let a:string,b:boolean,c:number;
a = "TypeScript"
b = true;
c = 8.9;

// Types: number,string, boolena, void, null y undefined 


//Tipos mas complejos

//Lista de cadena de texto
let listaTaareas:string[] = ["Tarea 1","Tarea 2"]

//Combinacion de tipos de listas
let valores:(string | number | boolean)[]= [false, "Hola", true, 56]

//Enumerados

enum Estados{
    "Completado"="C",
    "Incompleto"="I",
    "Pendiente"="P"
}

enum PuestoCarrera{
    "Primero",
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;

let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

//Interfaces

interface Tarea{
    nombre:string,
    estado:Estados,
    urgencia:number
}

// podemos crear variables que sigan la interface Tarea
let tarea1: Tarea ={
    nombre:"Tarea 1",
    estado:Estados.Pendiente,
    urgencia:10
}
console.log(`Tarea: ${tarea1.nombre}`);

//Asignacion multiple de variables
let miTarea={
    titulo:"Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
}

//En listas
let listaCompraLunes: string[] = ["Leche","Patatas"];
let listaCompraMartes: string[] = [...listaCompraLunes,"Pan","Huevos"];
let listaCompraMiercoles: string[] = ["Carne","Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

//En objetos
let estadoApp = {
    usuario:"admin",
    session: 3,
    jwt: "Bearer123978"
}

//Cambiar un valor por propagacion
let nuevoEstado ={
    ...estadoApp,
    session:4
}


//Declaracion 1 a 1
let miTutulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

//Declaracion con facto de propagación
let{titulo, estado, urgencia} = miTarea


//Types de TypesScript
type Producto={
    precio: number,
    nombre: string,
    anio:number
}

let coche: Producto={
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}

// ** Condicionales:

//Operadores ternarios
console.log(coche.anio < 2010? `Coche: ${coche.nombre} es viejo`: `Coche: ${coche.nombre} es nuevo`);

//if-else
if(error){
    console.log("Hay un error");
}else{
    console.log("No hay un error");
}

//if-else if-else
if (coche.anio<2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
} else if(coche.anio ===2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}else{
    console.log(`Coche: ${coche.nombre} es nuevo`);
}

//Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea esta incompletada");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente de combrobarse");
        break;    
    default:
        
        break;
}

//** Bucles

let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 15
    }
]

// Foreach
listaTareasNuevas.forEach(
    (tarea:Tarea, index:number)=> {
        console.log(`${index}-${tarea.nombre}`)
    }
);

//For clasico
for (let index = 0; index < listaTareasNuevas.length; index++) {
    const tarea = listaTareasNuevas[index];
    console.log(`${index}-${tarea.nombre}`)
}

//Blucle while
while (tarea1.estado !== Estados.Completado) {
    tarea1.urgencia++;
    if(tarea1.urgencia == 5){
        tarea1.estado = Estados.Completado;
        break;
    }else{
        tarea1.urgencia++;
    }
}

//Do while se ejecuta al menos una vez
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);


// Funciones

/**
 * Funcion que muestra un saludo por consola
 */
function saludar() { 
    let nombre = "Juan";
    console.log(`Hola mundo! ${nombre}`);
}

// Invocacion de la función
saludar();

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona
 */

 function saludarPersona(nombre:string){
    console.log(`Hola mundo! ${nombre}`);
 }

 saludarPersona("Juan");

 function despedirPersona(nombre:string = "Pepe"){
    console.log(`Adios, ${nombre}`);
 }

despedirPersona(); // Adios, Pepe
despedirPersona("Alba"); // Adios, Albo

/**
 * Funcion que muestra un adios por consola a una persona
 * @param nombre (opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?:string){
    if (nombre) {
        console.log(`¡Adios!, ${nombre}`);
    }else{
        console.log("¡Adios!");
    }
}
despedidaOpcional(); // ¡Adios!
despedidaOpcional("Pablo"); // ¡Adios, Pablo!

function variosParams(nombre :string, apellidos?:string, edad: number=18){
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }else{
        console.log(`${nombre}  tiene ${edad} años`);
    }
}
variosParams("Juan"); // Juan tiene 18 años
variosParams("Juan", "Gonzalez"); // Juan Gonzalez tiene 18 años
variosParams("Juan",undefined,22);// Juan tiene  18 años
variosParams("Juan","Gonzalez",22) // Juan Gonzalez tiene 22 años
variosParams(nombre="Juan", apellidos="Gonzalez",22);// Juan Gonzalez tiene 22 años

function ejemploVariosTipos(a:string | number){
    if(typeof(a)==='string'){
        console.log("A es un string");
    }else if(typeof(a)==='number'){
        console.log("A es un number");    
    }else{
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number")
    }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);
/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellido de la persona
 * @returns Nombre completo de la persona
 */
// Fuciones de retorno
function ejemploReturn(nombre:string, apellidos:string):string | number{
    return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Juán", "González");
console.log(nombreCompleto);
console.log(ejemploReturn("Pablo"," Gonzalez"));

/**
 * 
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres:string[]): void{
    nombres.forEach(nombre => {
        console.log(nombre)
    });
}

ejemploMultipleParams("Juan","Maria","Rebeca","Pablo","Cesar");
ejemploMultipleParams("Juan");

const lista = ["Juan","Pablo"]
ejemploMultipleParams(...lista);

function ejemploParamLista(nombres:string[]){
    nombres.forEach(nombre => {
        console.log(nombre)
    });
}
ejemploParamLista(lista);

// ARROW Funciones
let ejemploArrow = () =>{}
ejemploArrow();

type Empleado = {
    nombre:string
    apellido:string
    edad:number
}

let empleadoJuan:Empleado ={
    nombre:"Juan",
    apellido:"Gonzalez",
    edad:22
}

const mostrarEmpleado = (empleado:Empleado)=> `${empleado.nombre} tiene ${empleado.edad} años`
// Llamar a la funcion flecha
mostrarEmpleado(empleadoJuan);

const datosEmpleado = (empleado:Empleado):string =>{
    if (empleado.edad>70) {
        return `Empleado ${empleado.nombre} esta en edad de jubilar`; 
    }else{
        return `Empleado ${empleado.nombre} esta en edad de laboral`; 
    }
}

datosEmpleado(empleadoJuan); // Empleado Juan esta en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar:()=>string)=>{
    if (empleado.edad>70) {
        return 
    }else{
        return cobrar(); //callback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado)=>{
    console.log(`${empleado.nombre} cobrar su salario`);
}

obtenerSalario(empleadoJuan,()=> "Cobrar Juan");


// Async
// Funciones asincronas

async function ejemploAsync(): Promise<string>{
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync().then((respuesta)=>{
    console.log(`Respuesta, ${respuesta}`)
}).catch((error)=>{
    console.log(`Ha hábido un error ${error}`);
}).finally(()=>"Todo ha terminado");

// Funciones generadoras
function* ejemloGenerator(){
    //yield --> para emitir valores
     let index = 0;
     while(index < 5){
        //emitimos un valor incrementado
        yield index++;
     }
}

// Guardamos la funcion generadora en una variable
let generadora = ejemloGenerator();

// Acceso a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3

//Warcher
function* watcher(valor:number){
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
    yield  valor + 4; // emitimos el valor final + 4
}

//Woeker
function* worker(valor:number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); //0 lo ha hecho el watcher
console.log(generatorSaga.next().value); //1 lo ha hecho el worker
console.log(generatorSaga.next().value); //2 lo ha hecho el worker
console.log(generatorSaga.next().value); //3 lo ha hecho el worker
console.log(generatorSaga.next().value); //4 lo ha hecho el watcher





