import React from 'react';
import Welcome from './welcome';
import SkipTheRental from './skipTheRental';
import PorscheContainer from './porscheContainer';
import GoContainer from './goContainer';
import TileContainer from './tileContainer';
import PaysContainer from './paysContainer';
import Footer from '../footer/footer';

const MainContainer = () => {
    return (
        <>
        <div className='main-container'>
            <Welcome />
            </div>
            <SkipTheRental />
            <PorscheContainer />
            <GoContainer />
            <TileContainer />
            <PaysContainer />
            <Footer />
        </>
    );
}

export default MainContainer;
