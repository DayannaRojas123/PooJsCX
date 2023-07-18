
//ARRAY ASOCIATIVO---------------------------------------------

const arrtalento={'uno': 'juan','dos': 'pedro','tres':'cata'}

Object.keys(arrtalento).length //para ver longitud de objetos
Object.values(arrtalento)//ver los valores dentro de los objetos

//ARRAY CON OBJETOS----------------------------------------------

let talentos =[]

talentos['uno']='juan'
talentos['dos']='pedro'
talentos['tres']='cata'

Object.values(talentos)//ver los valores dentro de los objetos
talentos.length // tamaño 0
Object.keys(talentos).length // tamaño 3


//OBJETO LITERAL EN JAVASCRIPT------------------------------------

const talento={

    nombre: 'max',
    nivel: 'principiante',
    conocimiento: 'frontend'



}


talento['nombre'] //muestra lo que hay dentro de nombre

Object.values['nombre'] //lo mismo

talento.nivel //para ver dentro de la propiedad

talento.nivel = 'avanzado' //sobreescribimos

talento['metodo']=function(){} //agregarle un metodo a un objeto
 


//el mio:
const gato={

    raza:'siames',
    edad:'3 años',
    peso:'10 kg'
}

gato['comida']='wiskas' //añade propiedad y sale de primeras como unshift 





//OPERACIONES CON OBJETOS LITERALES---------------------------------------

const estudiantes=[

    {
        nombre:'dam lee',
        edad:34
    },
    {
        nombre: 'chun lee',
        edad: 36

    },
    {
        nombre: 'yun lee',
        edad:24
    }
]


  estudiantes.forEach(dato =>console.log(dato)) //recorremos el objeto que esta dentro del array poner punto edad

//opcion 1:

let edad1= estudiantes[0].edad
let edad2= estudiantes[1].edad
let edad3= estudiantes[2].edad

let sum= edad1+edad2+edad3

//opcion 2:
cont=0 

estudiantes.forEach(valor=>cont+=valor.edad)
console.log(cont)

//opcion 3:

cont2=0

for(let i=0;i<estudiantes.length;i++){

    cont2+=estudiantes[i].edad
} 


//opcion reduce:

const suma =estudiantes.reduce((anterior, actual)=>{
    return anterior + actual.edad
},0)
console.log(`la suma de las edades es ${suma}`)

const mayor=estudiantes.reduce((ant, act)=>{

    if(act.edad>ant){
        return act.edad
    }
    else
    {
        return ant
    }
},0);
console.log(`la mayor de las edades es ${mayor}`)



//como crear clase:


class rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  }
  

//como crear instancias:

const uno= new rectangulo (4,4)
const dos=new rectangulo('cuatro','cuatro')


//como cambiar valor del parametro de instancia:


rectangulo.alto=2



//funcion como constructor:
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);


//FORMA 2 DE CREAR OBJETO-----------------------------------------

let talent=new Object()
talent.name ='max' //crea propiedad directamente
talent.level='begginer'
talent.knowledge='frontend'

Object.getOwnPropertyNames(talent)//propiedades (hace lo mismo que los keys)


//FUNCION CONSTRUCTORA PARA CREAR MAS DE UN OBJETO------------------------------------------------

function fntalento(){ //esta funcion puede ejecutar ese metodo

    this.nombre='max'
    this.nivel='principiante'
    this.method= function(){} //metodo
}


let untalento=new fntalento()

//instancia cambiando valores

let dostalento= new fntalento()
dostalento.nombre='anna'
dostalento.nivel='intermedio'


//instancia es un objeto que utiliza las propiedades o parametros de una clase

//patron de deiseño: estrategia de programacion
//PATRON SINGLETON : garantiza la existencia de una unica instancia para una clase y la creacion de un mecanismo global a dicha instancia

let talentocoex = new function(){

    this.nombre ='max'
    this.nivel= 'principiante'
    this.method =function (){}
}

/* const tal =new talentocoex() */ //no se puede instancias , solo arriba


//ejemmplo animal
//objeto literal -- mala practica para crear objetos


const annimal={

    nombre: 'kyra',
    raza: 'beagle',
    ladrar(){

        console.log('guau guau')
    }



}

annimal.ladrar()//invoca la funcion
annimal.ladrar//sin parentesis solo muestra lo que tiene adentro


//funcion constructora para crear nuevos objetos :

 function animal (nombre,raza){

    this.nombre = nombre
    this.raza=raza
    this.ladrar = function(){        //metodo
         console.log ('guau guau')
    }
}
 

/* const perro= new animal ('tobby','schnauzer')

const gato= new animal ('salome','siames')

gato.ladrar =function (){

    console.log('miau miau')
} */

//forma 2 correctar de crear funcion constructora:

function animal2 (nombre,raza){

    this.nombre = nombre
    this.raza=raza

}

//prototype para pasar atributos o funciones(metodos) a una funcion constructora o clases

animal2.prototype.ladrar=function(){
    console.log ('guau guau')
}

const perro2 =new animal2('tobby','schnauzer')

animal2.prototype.grunhir = function(){

    console.log('rrrrrr')
}


const perro3= new animal2 ('kyra','beagle')
animal2.prototype //visualizar prototipos


//instancia ANIMAL+NUEVO PARAMETRO-----

animal.prototype.edad=19 //agregamos nueva propiedad edad a la funcion constructora

const perro4 = new animal2('bato','pitbull')

perro4.edad 

//destructuracion , se usa cuando en una aplicacion se carga una lista de la base de datos, cuando se quiere hacer filtros--------

let {nombre,raza, edad}=perro4 //objetos con {} y con [] para
console.log (nombre)//bato
console.log(raza) //pitbull



//convertir animal en una clase:--------

class animaal{

    constructor(nombre,raza,edad){

        this.name=nombre
        this.breed=raza
        this.age =edad
    }

    obtenerinfo(){

        return `el nombre del animal es ${this.name} y la raza es ${this.breed}`
    }
}

//crear instancia de clase----------------------------------------------------


const nuevoperro = new animaal('kira','beagle',6) 

//HERENCIA DE CLASE

/* class dog extends animaal{ //se pasan parametros de clase dog no de clase animal
    constructor(nombre,raza,edad,color) {

        super(nombre,raza,edad) //super para llamar parametros de la otra clase
        this.color =color



    }


}
 */
//instancia clase dog
/* 
const myperro= new dog ('luna','criolla','blanco')
console.log(myperro.edad)
console.log(myperro.color)
console.log(myperro.obtenerinfo()) */

//------------------------------------------------------------------------------------------

//clase padre:

class computador{

    constructor(marca,pantalla,procesador){

        this.marca=marca
        this.tamañopantalla=pantalla
        this.tipoprocesador=procesador


    }

    almacenardatos(){

        return 'datos guardados'
    }
    
    
}




//clases heredadas:

class portatil extends computador{

    constructor(marca,pantalla,procesador,ram){

        super(marca,pantalla,procesador)

       
        this.cantmemoriaram=ram
    }

    procesardatos(){

        return 'procesado'
    }




}

const x=new portatil('lenovo',51,'pollo',777)


class compudemesa extends computador{

    constructor(marca,pantalla,procesador,teclado){

        super(marca,pantalla,procesador)

        this.tipoteclado=teclado


    }

    aceptarentradas(){

        return 'entro'
    }


}

const y=new compudemesa('lg',444,'yuca','kaññe')

//ENCAPSULAMIENTO
//restriccion para acceder a los datos


class dog extends animaal{ 
    #raza

    constructor(nombre,raza,color,) {

        super(nombre,raza,edad) 
        this.color =color
        this.#raza=raza



    }
    getraza(){ //invoca get para mostrar lo q hay en raza
        return this.#raza
    }

    setraza(raza){     //se puede cambiar el valor de la cosa protegida
        this.#raza=raza //para darle un valor al protegido
    }


}

const myperro2= new dog ('luna','pincher','blanco')

 myperro2.setraza('lobo siberiano')//cambia el v alor de raza
 myperro2.getraza() //muestra el valor de raza

 myperro2.raza='pitbull' //agregar atributo a la intancia myperro2
 Object.values(myperro2)


