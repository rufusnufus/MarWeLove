import './index.css';

function Searchbar() {
  return (
    <div className="searchbar">
        <img src="images/search.png" alt="" className="searchbar__logo" />
        <input type="text" placeholder="Search" className="searchbar__search" />
    </div>
  );
}

export default Searchbar;