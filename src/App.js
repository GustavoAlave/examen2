import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Nuevo React 10/11/2023
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Instituto Honorio Delgado Espinoza <br></br>
          Berly Gustavo Alave Alave <br></br>
          Turno Dia
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
