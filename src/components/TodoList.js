import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(
          //usamos filteredtodos en lugar de "todos" para usar el estado filtrado y no la lista completa del estado todos ya que quiero mantener esa info
          (todo) => (
            <Todo
              text={todo.text}
              id={todo.id}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              key={todo.id}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default TodoList;
