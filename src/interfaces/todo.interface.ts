export interface ITodo{
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at?: Date;
}
export type TCreateTodoData = Pick<ITodo, "title" | "content">;
export type TUpdateTodoData = Partial<TCreateTodoData>;