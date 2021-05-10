import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BoardViews from './components/BoardViews'
import BoardRegister from './components/BoardRegister'
import BoardContent from './components/BoardContent'

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Router exact path="/">
            <BoardViews />
          </Router>
          <Router path="/content/:boardId">
            <BoardContent />
          </Router>
          <Router path="/register">
            <BoardRegister />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
