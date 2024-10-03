import Cabecalho from "./components/Cabecalho";
import Calculadora from "./components/Calculadora";

function App() {
  
  return (
    <>
      <div className="container">
        <Cabecalho />
        <Calculadora />

        <footer className="footer">
          desenvolvido por <a href="https://github.com/fsantos39" target="_blank">Fernando Santos</a>
        </footer>
      </div>
    </>
  )

}

export default App
