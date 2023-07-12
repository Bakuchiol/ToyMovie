// import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import toys from './models/toys';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* Mock Netflux page with pics */}
      {/* <div className='header'></div> */}
      <div><Main/></div>
      <h1>Movies based on Toys</h1>
      <div className='bottom'>
        <div className='carousel'>
          {toys.map((list,i) => {
            return <Characters key={i} list={list}/>
          }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
