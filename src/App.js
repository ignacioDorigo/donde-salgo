import "./App.css";
import Categorias from "./components/Categorias/Categorias";
import Eventos from "./components/Eventos/Eventos";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Categorias />
      <Eventos />
      <Footer />
    </div>
  );
}

export default App;
