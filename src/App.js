import Header from './components/Header';
import Searchbar from './components/Searchbar';
import CardsGallery from './components/CardsGallery';


function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <CardsGallery />
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
