import {Container, Navbar} from 'react-bootstrap';
import "../components/style.css";
/*import Logo from  "./components/Logo" 
<img src={Logo} alr="" />*/

function Navbart() {
    return (
      <div>
        <Container>
        <Navbar className="nav-top">
  <Navbar.Brand href="#home" >
<img className="myImage" src="./images/logo.svg" alt=""/>

  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end"> 
  
    <Navbar.Text >
       <a className="linknav" href="#">About us</a>
       <a href="#">Career</a>
       <a href="#">Departments</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </Container>
      
      </div>
    );
  }
  export default Navbart