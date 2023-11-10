import { useMemo, useState, createContext,useContext, memo } from "react";
const ThemeContext = createContext('speaknow');
const fibonacci = (n) => {
  if(n<=0) return 0;
  if(n===1) return 1;
  else return fibonacci(n-1) + fibonacci(n-2);
}

function App() {
  const [number, setNumber] = useState(9);
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [theme, setTheme] = useState('speaknow');
  const answer = useMemo(()=>fibonacci(number),[number])
  const handleChangeTheme = (()=> setTheme(theme === 'speaknow' ? 'midnights': 'speaknow'));

  return (
   <div>
   <h2>Fibonacci({number}):{answer}</h2>
   <button onClick={()=>setNumber(number+1)}> + </button>
   <h2>-- Memoization Example --</h2>
   <label>
    Name {':'}
    <input value={name} onChange={e=>setName(e.target.value)}/>
   </label>
   <label>
    Favourite Artist {':'}
    <input value={artist} onChange={e=>setArtist(e.target.value)}/>
   </label>
   <button onClick={handleChangeTheme}>Toggle Theme (Now using theme {theme})</button>
   <ThemeContext.Provider value={theme}>
   <Greeting name={name}/>
   </ThemeContext.Provider>
   </div>
  );
}

const Greeting = memo(function Greeting({name}){
  const theme = useContext(ThemeContext);
  console.log(`Greeting was rendered at ${new Date().toLocaleTimeString()}`)
  return (
    <div className={theme}>
      <ul>
      <li>Even when a component is memoized, it will still re-render when its own state changes. </li>
      <li>Even when a component is memoized, it will still re-render when a context that it’s using changes. </li>
      </ul>
      <h4>Hello {name && ','} {name}!</h4>
    </div>
  )
})

export default App;
