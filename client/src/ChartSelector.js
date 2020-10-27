import React,{useState} from 'react';
import Prompt from './Logic/Prompt';
import axios from 'axios';

const ChartSelector = () =>{
let [countries,changeCountries] = useState({
    country1:null,
    country2:null
});
    
    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        
        changeCountries(prevValue =>({
            ...prevValue,
            [name]:value    
        }));

        console.log(countries);
    }

    return(
        <div className = 'selectorContainer'>
            <div className = 'chartForm'>
                <span>
                    <Prompt change = {handleChange} name = {'country1'}/>
                </span>
                
                <span>
                    <Prompt change = {(e) => handleChange(e)} name = {'country2'}/>
                </span>
                <button name = {'country2'} className = 'makeChart'>Make My Chart</button>
            </div>
         
        </div>
    )
}

export default ChartSelector;