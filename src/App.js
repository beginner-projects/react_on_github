import "./App.css";
import Bitcoin from "./logo_btc.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Bitcoin} className="App-logo" alt="logo" />
        <p>Hello Bitcoin ! i am updating you now ASAP.</p>
        <a
          className="App-link"
          href="https://google.com"
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
