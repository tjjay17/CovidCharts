import React,{useState} from 'react';
import Prompt from './Logic/Prompt';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';


const ChartSelector = () =>{

let [countries,changeCountries] = useState({
    country1:'',
    country2:''
});

let [scale,changeScale] = useState(1000000);

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

// const formatDate = () =>{
//     let today = new Date();
//     let todayString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
//                     .toISOString()
//                     .split(".")[0];

    
//     //prev_date.getTime(0)
//     today.setDate(today.getDate() - 1);

//     today.setHours(0);
//     today.setMinutes(0);
//     today.setSeconds(0);

//     let yesterdayString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
//                     .toISOString()
//                     .split(".")[0]
//     return {
//         today:todayString,
//         yesterday:yesterdayString
//     };
// }
    
const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    console.log(countries);

    changeCountries(prevValue =>({
        ...prevValue,
        [name]:value    
    }));
}

const handleClick = () =>{
    console.log(countries);


    axios.get('https://api.covid19api.com/total/country/' + countries.country1)
    .then(res => {
        let lastEntryIndex = res.data.length - 1;
        let lastEntry = res.data[lastEntryIndex];
       // console.log(lastEntry.Active)
         updataAPIData(prevValue =>({
            ...prevValue,
            c1Country:lastEntry.Country,
            c1Active:lastEntry.Active,
            c1Confirmed:lastEntry.Confirmed,
            c1Deaths:lastEntry.Deaths,
            c1Recovered:lastEntry.Recovered
        }));
    })
    
    .catch(error => console.log(error));

    axios.get('https://api.covid19api.com/total/country/' + countries.country2)
    .then(res => {
        let lastEntryIndex = (res.data.length - 1);
        let lastEntry = res.data[lastEntryIndex];
       console.log(lastEntry.Active)
         updataAPIData(prevValue =>({
            ...prevValue,
            c2Country:lastEntry.Country,
            c2Active:lastEntry.Active,
            c2Confirmed:lastEntry.Confirmed,
            c2Deaths:lastEntry.Deaths,
            c2Recovered:lastEntry.Recovered
        }));
    })
    
    .catch(error => console.log(error));

    // axios.get('https://api.covid19api.com/country/'+ countries.country2 + '?from=' + yesterday +'Z&to=' + today+'Z')
    // .then(res => {
    //     let lastEntryIndex = res.data.length - 1;
    //     let lastEntry = res.data[lastEntryIndex - 1];
        
    //     return updataAPIData(prevValue =>({
    //         ...prevValue,
    //         c2Active:lastEntry.Active,
    //         c2Confirmed:lastEntry.Confirmed,
    //         c2Deaths:lastEntry.Deaths,
    //         c2Recovered:lastEntry.Recovered
    //     }));    
    // })

    // .catch(err => console.log(err));

    console.log(apiData);

    
     }


//this bit is for the charts
//chart1
const data1 = {
    labels: ['Confirmed','Deaths','Active','Recovered'],
    datasets: [
      {
        label:apiData.c1Country,
        backgroundColor: ['green','red','blue','yellow'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'black',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [apiData.c1Confirmed, apiData.c1Deaths,apiData.c1Active,apiData.c1Recovered]
      }
    ]
  }

const data2 = {
  labels: ['Confirmed','Deaths','Active','Recovered'],
  datasets: [
    {
      label:apiData.c2Country,
      backgroundColor: ['green','red','blue','yellow'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'black',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [apiData.c2Confirmed, apiData.c2Deaths,apiData.c2Active,apiData.c2Recovered]
    }
  ]
}

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max:1000000,
            min:0
          },
        },
      ],
    },
  }


// const handleClick = () =>{
//     axios.get()
// }

    return(
        <div className = 'selectorContainer'>
            <div className = 'chartForm'>
                <div id = 'country1'>
                    <Prompt change = {handleChange} name = {'country1'}/>
                </div>
                
                <div id = 'country2'>
                    <Prompt change = {handleChange} name = {'country2'}/>
                </div>
                <button name = {'submitCountry'} onClick = {handleClick} className = 'makeChart'>Make My Charts</button>
            </div>

            <div className = 'chartsContainer'>
                <div className = 'chart1Container'> 
                    <Bar
                        data={data1}
                        width={300}
                        height={300}
                        options={{
                            maintainAspectRatio: false,
                            ...options
                        }}
                />
                </div>

                <div className = 'chart2Container'> 
                    <Bar
                        data={data2}
                        width={300}
                        height={300}
                        options={{
                            maintainAspectRatio: false,
                            ...options
                        }}
                />
                </div>
            </div>

            <input className = 'scaleInput' />
          

            {/* <div className = 'chart2Container'>
                <Bar /
                    
            </div> */}
        </div>
    )

}


export default ChartSelector;