import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Header from './Source/Header';
import About from './Source/About';
import Services from './Source/Services';
import Port from './Source/Port';
import Test from './Source/Test';
import Contact from './Source/Contact';

function App() {
  return (
    <div className="row ">
      <div className="medium-12 columns">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Port/>
      <Test/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
