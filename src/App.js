import './App.css';
import Message from "./Message"
import Author from "./Author";
import {useEffect, useState} from "react";


function App(props) {
    const texts = props.text;
    const author = props.authors;

    const [value, setValue] = useState('');

    const updateValue = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        return () => {console.log(value)}
    }, [value]);

  return (
      <>
    <div className="App">
      <header className="App-header">
              <div>
                  <h1>{value}</h1>
                  <input type="text" value={value} onChange={updateValue}/>
                  <h1>{author}</h1>
                  <Author />
              </div>
          <div>
          <h2>{texts}</h2>
              <Message />
          </div>
      </header>
    </div>
      </>
  );
}


export default App;
