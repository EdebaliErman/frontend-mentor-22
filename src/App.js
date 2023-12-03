import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card.js/Card';
import { profileFind } from './Hook/hook';

function App() {
  const [next, setNext] = useState(1)
  const [data, setData] = useState(1)

  useEffect(() => {
    profileFind(next, setData)
  }, [next])

  const counter = () => {
    return next < 2 && setNext(next + 1)
  }
  const uncounter = () => {
    return next > 1 && setNext(next - 1)
  }

  return (
    <div className="App">
      <img className='z-0 absolute left-96 top-72 md:top-[500px] md:left-52 md:z-10 ' src={process.env.PUBLIC_URL+"./Assets/pattern-quotes.svg"} alt=''/>
      <Card
        name={data.name}
        img={data.img}
        job={data.job}
        pragraph={data.paragraph}
        key={data.id}
      />
      <div className='buttons'>
        <button onClick={uncounter}>
          <img src={process.env.PUBLIC_URL + "./Assets/icon-prev.svg"} alt='' />
        </button>
        <button onClick={counter}>
          <img src={process.env.PUBLIC_URL + "./Assets/icon-next.svg"} alt='' />
        </button>
      </div>
      <img className='z-0 absolute right-80 top-20 md:right-0 md:top-10 md:left-20' src={process.env.PUBLIC_URL+"./Assets/pattern-bg.svg"} alt=''/>
      <img className='z-0 absolute left-0 md:bottom-[-9rem]' src={process.env.PUBLIC_URL+"./Assets/pattern-curve.svg"} alt=''/>
    </div>
  );
}

export default App;
