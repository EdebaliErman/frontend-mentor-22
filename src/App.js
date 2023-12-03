import './App.css';
import Card from './Components/Card.js/Card';
import { profile } from './Data/data';

function App() {
  const profileFind = profile.find(item => item.id)
  console.log(profileFind)

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
