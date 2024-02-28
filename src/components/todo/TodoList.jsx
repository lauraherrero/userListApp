import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { SearchTodo } from "../search/SearchTodo";

export const TodoList = ({ todos }) => {

  const [search, setSearch] = useState("");

  return (
    <>
      <SearchTodo setSearch={setSearch}/>
      <ol>
        <div>
          {todos
            .filter((todo) => {
              return search.toLowerCase() === ""
                ? todo
                : todo.title.toLowerCase().includes(search);
            })
            .map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
      </ol>
    </>
  );
};
