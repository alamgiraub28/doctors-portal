import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderContent from '../HeaderContent/HeaderContent';
import css from './Header.css';

const Header = () => {
    return (
        <div className="header-content">
          <NavBar></NavBar>
           <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;