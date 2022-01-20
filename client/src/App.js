import { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import {init} from './socketApi'

function App() {

  useEffect(() => {
    init();
  }, [])
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
