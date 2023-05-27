import './App.css';
import Nav from './components/Nav';
import SecondNav from './components/SecondNav';
import Map from './components/Map';
import CartsContainer from './components/CartsContainer'

function App() {
  return (
    <>
      <Nav />
      <SecondNav />
      <div className='main-content'>
        <Map />
        <CartsContainer />
      </div>
    </>
  );
}

export default App;
