//rcisa ter nome maisúsculo
//dentro da classe, iremos criar variáveis e métodos
// Dentro da classe, podemos encapsular métodos e variáveis

class Person{
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name =name
    this.age = age
  }
  
  sayHello(){
    console.log("Olá")
  }

  sayMyName(){
    console.log(this.name)
    console.log(this.age)
  }
}
const personA = new Person("bERNARDO",26)
const personB = new Person("alex",33)
console.log(personA.sayMyName())
console.log(personB.sayMyName())