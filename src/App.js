import logo from './logo.svg';
import './App.css';
// bootstrap link 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
