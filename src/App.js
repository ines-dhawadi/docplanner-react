import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import Navbart from "./components/navbar"
import Part1 from "./components/part1"
import Cardd from "./components/Card"
import Part2 from "./components/part2"
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Part5 from "./components/Part5";
import Footer from "./components/Footer";
import Part4Props from "./components/Part4-props";

const parpromos =[
  {img:'https://www.docplanner.com/images/warsaw.png',name:'Warsaw'},
  {img:'https://www.docplanner.com/images/barcelona.png',name:'Barcelona'},
  {img:'https://www.docplanner.com/images/istanbul.png',name:'Istanbul'},
  {img:'https://www.docplanner.com/images/rome.png',name:'Rome'},
  {img:'https://www.docplanner.com/images/bologna.png',name:'Bologna'},
  {img:'https://www.docplanner.com/images/curitiba.png',name:'Curitiba'},
  {img:'https://www.docplanner.com/images/mexico-city.png',name:'Mexico City'},
  
]

function App() {
  return (
    <div className="App">
      
   <Navbart/>
   <Part1/>
   <Cardd/>
   <Part2 />
   <Part3 />
   <Container>
     <div className="d-flex flex-wrap ml-5">
     <Part4Props  pays ={ parpromos}/>
     </div>
   </Container>
 
   <Part4 />
   <Part5 />
   <Footer />
    </div>
  );
}

export default App;
