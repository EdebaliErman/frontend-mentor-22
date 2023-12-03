import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card.js/Card';
import { profileFind } from './Hook/hook';

function App() {
  const [next, setNext] = useState(1)
  const [data, setData] = useState(1)

  useEffect(() => {
    profileFind(next,setData)
  },[next])

  const counter = () => {
    return next < 2 && setNext(next + 1)
  }
  const uncounter = () => {
    return next > 1 && setNext(next - 1)
  }
  return (
    <div className="App">
      <Card 
      name={data.name}
      img={data.img}
      job={data.job}
      pragraph={data.paragraph}
      key={data.id}
      />
      <button onClick={counter}>+</button>
      <button onClick={uncounter}>-</button>
    </div>
  );
}

export default App;
