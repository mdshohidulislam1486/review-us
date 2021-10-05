import './App.css';
// bootstrap link 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import WhyUs from './components/WhyUs/WhyUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/whyus">
            <WhyUs></WhyUs>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
