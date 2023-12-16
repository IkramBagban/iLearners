import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import useFetch from './customHooks/useFetch';

function App() {

  const {data, isLoading, isError} = useFetch('/fraz')
  console.log('data',data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
