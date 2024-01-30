import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setisEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }
    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setisEdit(false);
    }
    return (
      <form className="totoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle"> {item.title}</span>
        <button className="button" onClick={() => setisEdit(true)}>Edit</button>
        <button className="button1" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return <div className="todo"> {isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
