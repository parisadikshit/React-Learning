import { useMemo, useState } from "react";
const fibonacci = (n) => {
  if(n<=0) return 0;
  if(n===1) return 1;
  else return fibonacci(n-1) + fibonacci(n-2);
}

function App() {
  const [number, setNumber] = useState(9);
  const answer = useMemo(()=>fibonacci(number),[number])

  return (
   <>
   <h1>useMemo Example</h1>
   <h2>Fibonacci({number}):{answer}</h2>
   <button onClick={()=>setNumber(number+1)}> + </button>
   </>
  );
}

export default App;
