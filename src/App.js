import Header from './components/Header';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      {/* 
        space for our future components & routes:
        header
        dynamic-content (router)
        / -> Characters
        /characters -> 
        /... -> ...
        footer 
      */}
    </div>
  );
}

export default App;
