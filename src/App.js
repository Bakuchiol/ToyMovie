// import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import toys from './models/toys';

function App() {
  return (
    <div className="App">
      {/* Mock E-Bay page with pics */}
      <div className='header'>EBAY</div>
      <div>
        {toys.map((list,i) => {
          return <Characters key={i} list={list}/>
        }
        )}
      </div>
    </div>
  );
}

export default App;
