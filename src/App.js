// import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import toys from './models/toys';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* Mock Netflux page with pics */}
      <div className='header'>netFlux</div>
      <div><Main/></div>
      <div className='carousel'>
        {toys.map((list,i) => {
          return <Characters key={i} list={list}/>
        }
        )}
      </div>
    </div>
  );
}

export default App;
