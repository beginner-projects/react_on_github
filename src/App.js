import './App.css';
import Bitcoin from './logo_btc.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Bitcoin} className="App-logo" alt="logo" />
        <p>
          Hello Bitcoin !
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Blockchain
        </a>
      </header>
    </div>
  );
}

export default App;
