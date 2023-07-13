import React from "react";

const Todo = () => {
  return (
    <div className="todo">
      <div>
        <ul></ul>
      </div>
      <div className="bottom-stats">
        <select name="" id="" className="list-select">
          <option value="1">Sort by Input Order</option>
          <option value="2">Sort by Description</option>
          <option value="3">Sort by Packed Status</option>
        </select>
        <button className="actions-button" type="submit">
          Clear List
        </button>
      </div>
    </div>
  );
};

export default Todo;
