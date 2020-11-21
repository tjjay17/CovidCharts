import React from 'react';
import Arrow from '../UI/Arrow';

const LandingPage = () =>{
    return(
        <div className = 'landingContainer'>
            <div className = 'Prompts'>
                <h1 className = 'title'>Covid Charts</h1>
                <h2 className = 'info'>Free Source of Global Covid Charts</h2>
            </div>

            <Arrow goTo = {'#charts'} nameOfClass = {'arrow'}/>                
        </div>
    );
}

export default LandingPage;