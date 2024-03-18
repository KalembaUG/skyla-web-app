import React from 'react';
import Navigation from './navigation';
import Logo from './logo';

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <Navigation/>
        </div>
    );
}

export default Header;
