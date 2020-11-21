import React,{useState} from 'react';
import Selector from '../Selects/Selector';
import Chart from './Chart';
import axios from 'axios';

const ChartsPage = (props) =>{

let defaultStatement = 'Hover or Click On Bars for Specific Numbers';

//country select, graph scale and api data state respectively
let [countries,changeCountries] = useState({
    country1:'',
    country2:''
});

let [scale,changeScale] = useState(1000000);
let [msg, updateMsg] = useState(defaultStatement);

let [apiData,updataAPIData] = useState({
    c1Country:'Country 1',
    c1Confirmed:null,
    c1Deaths:null,
    c1Active:null,
    c1Recovered:null,

    c2Country:'Country 2',
    c2Confirmed:null,
    c2Deaths:null,
    c2Active:null,
    c2Recovered:null
});

const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    changeCountries(prevValue =>({
        ...prevValue,
        [name]:value    
    }));
}

//takes select data and queries the API
const handleClick = () =>{
    axios.get('https://api.covid19api.com/total/country/' + countries.country1)

    .then(res => {
        let lastEntryIndex = res.data.length - 1;
        let lastEntry = res.data[lastEntryIndex];

        if(lastEntry.Country){
          updataAPIData(prevValue =>({
            ...prevValue,
            c1Country:lastEntry.Country,
            c1Active:lastEntry.Active,
            c1Confirmed:lastEntry.Confirmed,
            c1Deaths:lastEntry.Deaths,
            c1Recovered:lastEntry.Recovered
          }));

          updateMsg(defaultStatement);
        } 
    })

    .catch(error => updateMsg('No Data Available or Invalid Request'));

    axios.get('https://api.covid19api.com/total/country/' + countries.country2)
    .then(res => {
        //obtain latest piece of data there
        let lastEntryIndex = res.data.length - 1;
        let lastEntry = res.data[lastEntryIndex];

        //update the data received from the API
        if(lastEntry.Country){
          updataAPIData(prevValue =>({
            ...prevValue,
            c2Country:lastEntry.Country,
            c2Active:lastEntry.Active,
            c2Confirmed:lastEntry.Confirmed,
            c2Deaths:lastEntry.Deaths,
            c2Recovered:lastEntry.Recovered
          }));

          updateMsg(defaultStatement)
        }
        
    })
    .catch(error => updateMsg('No Data Available or Invalid Request'));
}

const scaleChange = (event) => {
    let value = event.target.value;
    return changeScale(value);
 }

    return(
        <div id = 'charts' className = 'selectorContainer'>
            <div className = 'chartForm'>
              <div id = 'countrySelectors'>

                    <div id = 'country1'>
                        <Selector change = {handleChange} name = {'country1'}/>
                    </div>
                    
                    <div id = 'country2'>
                        <Selector change = {handleChange} name = {'country2'}/>
                    </div>

                    <input type = 'number' onChange = {scaleChange} id = 'scaleMax' placeholder = 'Max Scale Value (Number)'/>
              </div>
              <button name = {'submitCountry'} onClick = {handleClick} className = 'makeChart'>Create</button>
            </div>

            <div className = 'chartsContainer'>
                <div className = 'chart1Container'> 
                    <Chart 
                      Confirmed = {apiData.c1Confirmed} 
                      Deaths = {apiData.c1Deaths} 
                      Active = {apiData.c1Active}  
                      Recovered = {apiData.c1Recovered}
                      color = 'orange' 
                      Country = {apiData.c1Country}
                      scale = {scale}
                    />
                </div>

                <div className = 'chart2Container'> 
                    <Chart 
                      Confirmed = {apiData.c2Confirmed}
                      Deaths = {apiData.c2Deaths} 
                      Active = {apiData.c2Active}  
                      Recovered = {apiData.c2Recovered}
                      color = 'red' 
                      Country = {apiData.c2Country}
                      scale = {scale}
                    />
                </div>
            </div>

            <h2 id = 'hoverDirective'>{msg}</h2>
        </div>
    );
}
export default ChartsPage;

