import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  useEffect(() => {
    document.title = "Far away - Exploring";
  }, []);
  const [listPackages, setListPackages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const middle = e.target;
    const inputData = middle.inputField.value;
    const selectData = middle.selectData.value;
    const listItem = {
      inputData,
      selectData,
      checked: false,
      submitDate: new Date().toLocaleDateString(),
      id: Math.floor(Math.random() * 900000) + 100000,
    };
    setListPackages([...listPackages, listItem]);
  };
  const handleCheckboxChange = (event, id) => {
    listPackages.find((item) => item.id === id).checked = true;
    const filterItems = listPackages.filter((item) => item);
    setListPackages(filterItems);
  };
  const handleDelete = (id) => {
    setListPackages(listPackages.filter((item) => item.id !== id));
  };
  const handleRemove = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setListPackages([]);
    } else {
      return;
    }
  };
  return (
    <div className="App">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Todo
        listPackages={listPackages}
        handleCheckboxChange={handleCheckboxChange}
        handleDelete={handleDelete}
        handleRemove={handleRemove}
      />
      <Footer />
    </div>
  );
}

export default App;
