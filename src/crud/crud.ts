import { ITodo, TCreateTodoData, TUpdateTodoData } from "../interfaces/todo.interface";

interface ITodoService{
  todoList:ITodo[]
  createTodo(bodyRequest: TCreateTodoData): ITodo
  removeTodo(removingId: number):string
  updateTodo(updatingId: number, bodyRequest: TUpdateTodoData): ITodo | "string"
}

// class TodoService implements ITodoService{
//   // o que queremos variar, usamos o construtor
//   // o que queremos que fique fixo, não precisamos da
//   // queremos que o id fique fixo
//   todoList:ITodo[]
//   private id = 1
// // sE O TODO LIST N]AO FOR PASSADO, O VALOR PADRÃO SERA UM ARRAY VAZIO
//   constructor(todoList:ITodo[] = []){
//     this.todoList = todoList
//   }

//   createTodo(bodyRequest: TCreateTodoData){
//     const newDate = new Date()

//     const newTodo:ITodo = {
//       id:this.id,
//       ...bodyRequest,
//       created_at:newDate
//     }

//     this.todoList.push(newTodo)

//     this.id++  
  

//     return newTodo
//   }

//   removeTodo(removingId:number){
//     const findIndex = this.todoList.findIndex((todo)=>todo.id==removingId)

//     if(findIndex !== -1){
//       this.todoList.splice(findIndex,1)
//       return "todo sucessfully deleted"
//     }
//     return "todo not found"
//   }

//   updateTodo(updatingId:number,bodyRequest:TUpdateTodoData){
//     const newDate = new Date()

//     const findTodo = this.todoList.find((todo)=>todo.id === updatingId)

//     if(!findTodo){
//       return "todo not found"
//     }
    
//     const updateTodo:ITodo = {
//       ...findTodo,
//       ...bodyRequest,
//       updated_at:newDate
//     }

//     const findIndex = this.todoList.findIndex((todo)=>todo.id === updatingId)

//     this.todoList.splice(findIndex,1,updateTodo)

//     return updateTodo
//   }

// }
// const newTodo = new TodoService()

const todoList:ITodo[] = []
let id = 1

class TodoService implements ITodoService{
  // o que queremos variar, usamos o construtor
  // o que queremos que fique fixo, não precisamos da
  // queremos que o id fique fixo
  
// sE O TODO LIST N]AO FOR PASSADO, O VALOR PADRÃO SERA UM ARRAY VAZIO


  static createTodo(bodyRequest: TCreateTodoData){
    const newDate = new Date()

    const newTodo:ITodo = {
      id:id,
      ...bodyRequest,
      created_at:newDate
    }

    todoList.push(newTodo)

    id++  
  

    return newTodo
  }

  static removeTodo(removingId:number){
    const findIndex = todoList.findIndex((todo)=>todo.id==removingId)

    if(findIndex !== -1){
     todoList.splice(findIndex,1)
      return "todo sucessfully deleted"
    }
    return "todo not found"
  }

  static updateTodo(updatingId:number,bodyRequest:TUpdateTodoData){
    const newDate = new Date()

    const findTodo = todoList.find((todo)=>todo.id === updatingId)

    if(!findTodo){
      return "todo not found"
    }
    
    const updateTodo:ITodo = {
      ...findTodo,
      ...bodyRequest,
      updated_at:newDate
    }

    const findIndex = todoList.findIndex((todo)=>todo.id === updatingId)

    todoList.splice(findIndex,1,updateTodo)

    return updateTodo
  }

}
// const newTodo = new TodoService()
TodoService.createTodo()



