
import './App.scss';
import { Button, Navbar, Nav,NavDropdown, Form, FormControl } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Test() {
  return (<div>router works</div>);
}
function App() {
  return (
    <>
    <div className="page-height">
    <Router>
  <Navbar bg="white" expand="lg" className="mb-3">
  <Navbar.Brand as={Link} to="/" className="">
      <img
        alt=""
        src="/logo1.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      <span className="text-primary">Tech Studio</span>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="nav-menu">
    <Nav>
    <NavDropdown title="Tutorials" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/java-blog" eventKey="4.3">Java</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.8">Angular</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.9">React</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.13">Vue</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.14">Microservices</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.23">Docker</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/contact" eventKey="4.1">Kubernetes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Blog" id="basic-nav-dropdown">
      <NavDropdown.Item>Java</NavDropdown.Item>
        <NavDropdown.Item>Angular</NavDropdown.Item>
        <NavDropdown.Item>React</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Vue</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.54">Microservices</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Docker</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Kubernetes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">About</Nav.Link>
      <NavLink to="/contact" className="nav-link" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} exact>Contact</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
  <Route path="/contact"><Contact/></Route>
  <Route path="/java-blog"><JavaBlog/></Route>
  <Route path="/">
    <Home />
  </Route>
</Switch>
</Router>
</div>
<footer className="footer border-none border-top border-gray">&#169; Learn JS 2021</footer>
    </>
  );
}

function Contact() {
  return (
    <>
    <div className="d-flex justify-content-center page-content">Contact us</div>
    </>
  )
}

function JavaBlog() {
  return (
    <>
    <div className="d-flex justify-content-center page-content">Java Blog</div>
    </>
  )
}

function Home() {
  return <>home works!</>
}

export default App;
