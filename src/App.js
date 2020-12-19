import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <Todo todoList={[1,2,3]} newProps={"hello"} />
      </header>
    </div>
  );
}

export default App;
