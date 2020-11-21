import React from 'react';
import {Bar,defaults} from 'react-chartjs-2';

defaults.global.defaultFontFamily = "'Lato',sans-serif";
const Chart = (props) =>{

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max:parseInt(props.scale),
                min:0
              },
            },
          ],
        },
      }

      const data = {
        labels: ['Confirmed','Deaths','Active','Recovered'],
        datasets: [
          {
            label:props.Country,
            backgroundColor: [props.color,props.color,props.color,props.color],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'black',
            hoverBorderColor: 'yellow',
            data: [props.Confirmed, props.Deaths,props.Active, props.Recovered]
          }
        ]
      }

    return(
        <Bar
        data={data}
        width={300}
        height={300}
        options={{
            maintainAspectRatio: false,
            responsive:true,
            ...options
        }}
/>
    )
}

export default Chart;