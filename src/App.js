import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Departments from './Container/Departments/Departments';
import { Route } from 'react-router-dom';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
 

function App() {
  return (
    <>
      <Header />
      
      <switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/departments"} exact component={Departments}/>
        <Route path={"/doctors"} exact component={Doctors}/>
        <Route path={"/about"} exact component={About}/>
        <Route path={"/contact"} exact component={Contact}/>


        
      </switch>

      <Footer />
    </>
  );
}

export default App;
