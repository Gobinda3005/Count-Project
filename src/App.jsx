import { useState } from 'react';
import'./App.css'

function App() {
  const [count, setCount] = useState(0)
  function add ()
  {
    { 
      if (count < 25) {
    setCount (count+1); }
    }

    {
    if (count > 0) {
    setCount (count-1) }
    }
    setCount (0)
  }
  // const handleIncrement = () => {
  //   if (count < 25) {
  //     setCount(count + 1);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <>
      <div className="counter">
        <p>Add Quantity {count}</p>
        <br />
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>--</button>
        <button onClick={() => setCount((count) => 0)}>0</button>
      </div>
    </>
  )
}

export default App
