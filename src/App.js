import { useEffect } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    document.title = "Far away - Exploring";
  }, []);
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
