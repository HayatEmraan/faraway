import { useEffect } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  useEffect(() => {
    document.title = "Far away - Exploring";
  }, []);
  return (
    <div className="App">
      <Header />
      <Form />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
