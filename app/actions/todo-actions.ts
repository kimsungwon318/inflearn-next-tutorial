"use server";

var TODOS: string[] = ["Gogo", "Gogo2", "Gogo3"];

export async function getTodos() {
  return TODOS;
}

export const createTodo = async (data: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  TODOS.push(data);
  return TODOS;
};
