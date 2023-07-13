import React from "react";

const Form = () => {
  return (
    <form className="form-handle">
      <h1 className="form-title">What do you need for your 😍 trip?</h1>
      <div className="input-field-container">
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input className="input-field" type="text" name="input-field" id="" placeholder="Item..." />
        <button className="btn" type="submit">ADD</button>
      </div>
    </form>
  );
};

export default Form;
