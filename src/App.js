import "./App.css";
import Categorias from "./components/Categorias/Categorias";
import Eventos from "./components/Eventos/Eventos";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Categorias />
      <Eventos />
    </div>
  );
}

export default App;
