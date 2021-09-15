import './index.css';

function Header() {
  return (
    <div className="header">
        <a href="#" className="header__logo">
            Mar<span>we</span>Love
        </a>
        <div className="header__navbar">
            <a href="#" className="header__button">
                characters
            </a>
            <a href="#" className="header__button">
                comics
            </a>
        </div>
    </div>
  );
}

export default Header;