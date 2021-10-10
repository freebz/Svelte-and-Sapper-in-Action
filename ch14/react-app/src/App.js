import logo from './logo.svg';
import './App.css';
import './svelte-elements';

function App() {
  return (
    <div className="App">
      <svelte-greet name="Mark" />
      <svelte-counter />
    </div>
  );
}

export default App;
