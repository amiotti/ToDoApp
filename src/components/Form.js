import React from "react";

function Form({ input, setInput, todos, setTodos, setStatus }) {
  function inputHandler(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }
  return (
    <form>
      <input
        value={input}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={onSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
