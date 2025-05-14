"use client";

import { useQuery, useMutation } from "react-query";
import { getTodos, createTodo } from "../actions/todo-actions";
import { useState } from "react";
import { queryClient } from "../config/ReactQueryProvider";

export default function TodosPage() {
  const [todoInput, setTodoInput] = useState("");

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (todoInput === "") throw new Error("Todo input is empty");
      return createTodo(todoInput);
    },
    onSuccess: (TODOS) => {
      console.log(TODOS);
      todosQuery.refetch();
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={todoInput}
        placeholder="Add a todo"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={() => createTodoMutation.mutate()}>
        {createTodoMutation.isLoading ? "Adding..." : "Add"}
      </button>

      {/* {todosQuery.isLoading && <div>Loading...</div>} */}
      {todosQuery.data?.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
    </div>
  );
}
