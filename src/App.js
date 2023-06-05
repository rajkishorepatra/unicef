import NAvbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import JoinUs from './components/JoinUs';
// import Events from './components/Events';
import Partner from './components/Partner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='cont'>
        <NAvbar />
        <Hero />
      </div>
      <JoinUs />
      {/* <Events/> */}
      <Partner/>
      <Footer/>
    </>
  );
}

export default App;
