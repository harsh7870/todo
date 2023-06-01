import React, { useState } from "react";
// import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (e) => {
    e.preventDefault()
    if (title.trim() !== "") {
      if (editMode) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { title, description };
        setTodos(updatedTodos);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTodos([...todos, { title, description }]);
      }
      setTitle("");
      setDescription("");
    }
  };

  const editTodo = (index) => {
    const todoToEdit = todos[index];
    setTitle(todoToEdit.title);
    setDescription(todoToEdit.description);
    setEditMode(true);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <header>
        <h1>TODO App</h1>
      </header>
      <main>
        <form className="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className={editMode ? "update-button" : "add-button"}
          >
            {editMode ? "Update" : "Add"}
          </button>
        </form>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <div className="todo-actions">
                <button className="edit-button" onClick={() => editTodo(index)}>
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>TODO App - OpenAI</p>
      </footer>
    </div>
  );
}

export default TodoApp;
