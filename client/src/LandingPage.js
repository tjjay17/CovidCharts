import React from 'react';
import Arrow from './UI/Arrow';

const LandingPage = () =>{
    return(
        <div className = 'landingContainer'>
            <div className = 'Prompts'>
                <h1 className = 'title'>Covid Charts</h1>
                <h2 className = 'info'>Free Source of Global Covid Charts</h2>
            </div>
            <Arrow goTo = {'#charts'} nameOfClass = {'arrow'}/>
            {/* <button className = 'skipButton'>
                <a  id = 'skip' href = '#charts'>Skip to Tool</a>
            </button> */}

                {/* <svg style = {{zIndex:'-1'}} id = 'landingWaves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L16,160C32,160,64,160,96,154.7C128,149,160,139,192,138.7C224,139,256,149,288,165.3C320,181,352,203,384,176C416,149,448,75,480,64C512,53,544,107,576,138.7C608,171,640,181,672,170.7C704,160,736,128,768,106.7C800,85,832,75,864,69.3C896,64,928,64,960,80C992,96,1024,128,1056,160C1088,192,1120,224,1152,240C1184,256,1216,256,1248,218.7C1280,181,1312,107,1344,96C1376,85,1408,139,1424,165.3L1440,192L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg> */}
                
        </div>
    );
}

export default LandingPage;