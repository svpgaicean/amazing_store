import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Info from '../Info/Info';
import Links from '../Links/Links';
import Searchbar from '../Searchbar/Searchbar';
import Cart from '../Cart/Cart';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="container">
          <div className="container-left flex-col">
            <Logo />
          </div>
          <div className="container-right">
            {/* top row */}
            <div className="flex-row">
              <Info />
              <Links />
            </div>
            {/* bot row */}
            <div className="flex-row">
              <Searchbar />
              <Cart />
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Header;
