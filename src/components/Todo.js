import React, { useState } from "react";

const Todo = ({ listPackages, handleCheckboxChange, handleDelete, handleRemove }) => {

  return (
    <div className="todo">
      <div>
        <ul className="todo-list">
          {listPackages &&
            listPackages.map((item) => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => handleCheckboxChange(e, item.id)}
                  />
                  <h4 className={item.checked ? "todo-item" : ""}>
                    {item.selectData}. {item.inputData}
                  </h4>
                  <button type="submit" onClick={()=> handleDelete(item.id)}>❌</button>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="bottom-stats">
        <select name="" id="" className="list-select">
          <option value="1">Sort by Input Order</option>
          <option value="2">Sort by Description</option>
          <option value="3">Sort by Packed Status</option>
        </select>
        <button className="actions-button" type="submit" onClick={handleRemove}>
          Clear List
        </button>
      </div>
    </div>
  );
};

export default Todo;
