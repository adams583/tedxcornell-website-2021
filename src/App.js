import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Apply from './apply/Apply';
import Events from './events/Events';
import Faq from './faq/Faq';
import Story from './story/Story';
import Speakers from './speakers/Speakers';
import Home from './home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/apply">
            <Apply />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
