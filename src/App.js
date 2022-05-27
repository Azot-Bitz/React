import './App.css';
import Message from "./Message"

const myName = 'Vasiliy';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
          <Message name={myName}/>
      </header>
    </div>
  );
}


export default App;
