import './App.css';
import Nav from './nav/Nav';
import Quotes from './quotes/Quotes';
import Markdown from './markdown/Markdown';
import Drum from './drum/Drum';
import Calculator from './calculator/Calculator';
import Clock from './clock/Clock';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <Quotes />
        <Markdown />
        <Drum />
        <Calculator />
        <Clock />
        
      </header>
    </div>
  );
}

export default App;
