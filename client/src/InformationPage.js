import React from 'react';
import Arrow from './UI/Arrow';
import Prompt from './Logic/Prompt';

const InformationPage = () =>{
    return(
        <div id = 'infoPage' className = 'howContainer'>
            <h1 className = 'infoHeader'>How This Works?</h1>

            <p className = 'description'>
                This tool aims to use data from the covid 19 api to plot bar graphs of the covid stats of different countries.  
            </p>
            <br />
            <div className = 'toolImages'>
                <a target = '_blank' href = 'https://chartjs.org'>
                    <img className = 'chartJSLogo' src = '/assets/chartJSLogo.png' height = '250' width = '400' alt = 'chartJS' />
                </a>
                <a target = '_blank' href = 'https://covid19api.com'>
                    <img className = 'APIlogo' src = '/assets/APILogo.jpg' alt = 'covidAPI' />
                </a>
            </div>
            <Arrow goTo = '#charts' nameOfClass = {'infoArrow'} />
          
        </div>
    );
}

export default InformationPage;