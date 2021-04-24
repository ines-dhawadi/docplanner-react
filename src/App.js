import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import Navbart from "./components/navbar"
import Part1 from "./components/part1"
import Cardd from "./components/Card"
import Part2 from "./components/part2"

function App() {
  return (
    <div className="App">
      
   <Navbart/>
   <Part1/>
   <Cardd/>
   <Part2 />
    </div>
  );
}

export default App;
