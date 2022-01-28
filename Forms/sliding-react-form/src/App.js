 import LoginForm from "./components/LoginForm";
 import './App.css';
const App = () => (
  <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <LoginForm/>
        </p>
        <a
          className="App-link"
          href="https://javascriptsu.wordpress.com/tag/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);

export default App;
