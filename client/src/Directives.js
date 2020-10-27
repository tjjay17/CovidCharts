import React from 'react';
import Arrow from './UI/Arrow';

const Directives = () =>{
    return(
        <div className = 'directiveContainer'>
            <h1 id = 'directives'>Stay Safe!</h1>
            <div className = 'tips'>
                <ul className = 'tipList'>
                    <li className = 'tip1'>Only go out when necessary.</li>
                    <li className = 'tip2'>Always try to maintain at least two feet from others.</li>
                    <li className = 'tip3'>Wash your hands with soap and water, use sanitizer when you can't</li>
                    <li className = 'tip4'>Wear a mask anytime social distancing is hard.</li>
                    <li className = 'tip5'>Focus on mental health! This is a stressful time.</li>
                </ul>
            </div>
            <img height = '200' width = '300' className = 'maskImg' src = '/assets/maskImg.png' alt = 'mask' />
            <Arrow goTo = '#infoPage' nameOfClass = 'directiveArrow' />
        </div>
    );
}

export default Directives;