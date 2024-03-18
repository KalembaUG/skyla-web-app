import React, { useState } from 'react';
import TopBar from '../components/topBar';
import MainContainer from '../components/mainContainer';


const Home = () => {
    const [startDate ,setStartDate] = useState(new Date())
    return (
        <div>
            <TopBar/>
            <MainContainer />


        </div>
    );
}

export default Home;
