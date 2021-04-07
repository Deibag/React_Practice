import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';



const App = () => {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/:id" component={Item} />
      </Switch>
    </div>
  );
}

export default App;
