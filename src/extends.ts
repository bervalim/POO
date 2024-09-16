// Herança

// Capcidade de uma classe herdar variáveis e métodos de outra classe

class Person{
  name:string
  age:number

  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }

  sayMyName(){
    console.log(this.name)
  }
}

class Student extends Person{
  courseModule:string
  
  constructor(name:string,age:number, courseModule:string){
    super(name,age)
    this.courseModule = courseModule
  }

  sayMyModule(){
    console.log(this.courseModule)
  }
}

class Teacher extends Person{

}

class Employee extends Person{
  job:string
//Redeeclaração dos parâmetros da classe original
  constructor(name:string,age:number,job:string){
    super(name,age)
    this.job = job
  }

  sayMyName(){
    console.log(`Olá, eu sou ${this.name} , ${this.job}`)
  }


}
const employee = new Employee("Bernardo",26,"Desenvolvedor")
const student = new Student("Biru",28,"M5")
