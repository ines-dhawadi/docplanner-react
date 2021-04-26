import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import Navbart from "./components/navbar"
import Part1 from "./components/part1"
import Cardd from "./components/Card"
import Part2 from "./components/part2"
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";

function App() {
  return (
    <div className="App">
      
   <Navbart/>
   <Part1/>
   <Cardd/>
   <Part2 />
   <Part3 />
   <Part4 />
    </div>
  );
}

export default App;
