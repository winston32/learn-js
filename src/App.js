
import './App.scss';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Test() {
  return (<div>router works</div>);
}
function App() {
  return (
    <Router>
    <Link to="/test"><Button variant="danger" className="m-5">Test</Button></Link>
    <Switch>
      <Route path="/test"><Test/></Route>
    </Switch>
    </Router>
  );
}

export default App;
