import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Departments from './Container/Departments/Departments';
import { Route } from 'react-router-dom';
 

function App() {
  return (
    <>
      <Header />
      
      <switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/departments"} exact component={Departments}/>
        
      </switch>

      <Footer />
    </>
  );
}

export default App;
