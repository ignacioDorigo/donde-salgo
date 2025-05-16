import "./App.css";
import Categorias from "./components/Categorias/Categorias";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Categorias />
    </div>
  );
}

export default App;
