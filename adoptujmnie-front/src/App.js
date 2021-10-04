import './App.css';
import {Pets} from './components/Pets'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
    <Header></Header>
    <br></br>
    <Pets></Pets>
    <Footer></Footer>
    </div>
  );
}

export default App;
