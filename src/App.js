import { useState } from 'react'
import Counter from './components/Counter'

function App() {

  const [countShow, setCountShow] = useState(true)
    const handelToggle = () => {
        setCountShow(prevCountShow => setCountShow(!prevCountShow))
    }
  return (
    <div className="app">
            
            <button className="buttonToggle" onClick={handelToggle} > {countShow ? "Hide counter" : "Show counter"}</button>
            {countShow && <Counter />}
        </div>
  );
}

export default App;
