import React from "react";

const Form = ({handleSubmit}) => {
  const optionsData = [];
  const options = () => {
    for (let i = 1; i <= 10; i++) {
      optionsData.push(i);
    }
  };
  options();
  return (
    <form className="form-handle" onSubmit={handleSubmit}>
      <h1 className="form-title">What do you need for your 😍 trip?</h1>
      <div className="input-field-container">
        <select name="selectData" id="">
          {optionsData.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <input
          className="input-field"
          type="text"
          name="inputField"
          id=""
          placeholder="Item..."
        />
        <button className="btn" type="submit">
          ADD
        </button>
      </div>
    </form>
  );
};

export default Form;
