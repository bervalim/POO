import { ITodo, TCreateTodoData, TUpdateTodoData } from "../interfaces/todo.interface";

class TodoService{
  // o que queremos variar, usamos o construtor
  // o que queremos que fique fixo, não precisamos da
  // queremos que o id fique fixo
  todoList:ITodo[]
  id = 1
// sE O TODO LIST N]AO FOR PASSADO, O VALOR PADRÃO SERA UM ARRAY VAZIO
  constructor(todoList:ITodo[] = []){
    this.todoList = todoList
  }

  createTodo(bodyRequest: TCreateTodoData){
    const newDate = new Date()

    const newTodo:ITodo = {
      id:this.id,
      ...bodyRequest,
      created_at:newDate
    }

    this.todoList.push(newTodo)

    this.id++  

    return newTodo
  }

  removeTodo(removingId:number){
    const findIndex = this.todoList.findIndex((todo)=>todo.id==removingId)

    if(findIndex !== -1){
      this.todoList.splice(findIndex,1)
      return "todo sucessfully deleted"
    }
    return "todo not found"
  }

  updateTodo(updatingId:number,bodyRequest:TUpdateTodoData){
    const newDate = new Date()

    const findTodo = this.todoList.find((todo)=>todo.id === updatingId)

    if(!findTodo){
      return "todo not found"
    }
    
    const updateTodo:ITodo = {
      ...findTodo,
      ...bodyRequest,
      updated_at:newDate
    }

    const findIndex = this.todoList.findIndex((todo)=>todo.id === updatingId)

    this.todoList.splice(findIndex,1,updateTodo)

    return updateTodo
  }

}
const newTodo = new TodoService()
