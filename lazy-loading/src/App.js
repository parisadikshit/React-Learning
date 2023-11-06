import './App.css';
import {useState} from 'react';
import Artists from './Artists';
function App() {
  const [show, setShow] = useState(false);
  if(show){
    return (
      <Artists name='tswift'/>
    )
  }
  else{
    return (
      <button onClick={()=>setShow(true)}>
        Show Taylor Swift's Albums
      </button>
    )
  }
}

export default App;
