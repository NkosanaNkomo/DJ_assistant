import './App.css';
import Container from './components/Container';
import Container2 from './components/Container2';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Container />
      
      <Container2 />
    </div>
  );
}

const Home = ()=> (
  <div className="home">
    <h3>Home</h3>
  </div>
)

export default App;
