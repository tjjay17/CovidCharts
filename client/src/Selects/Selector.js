import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Selector = (props) =>{

    let [options,updateOptions] = useState([]);

    useEffect(() => {
        axios.get('https://api.covid19api.com/countries')
        .then(res => {
            sortOptions(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    
//the api doesn't sort countries alphabetically, this function sorts it
    const sortOptions = (toSort) => {
         let sorted = toSort.sort((country1,country2) =>{
            let compare1 = country1.Country.toUpperCase();
            let compare2 = country2.Country.toUpperCase();
            if (compare1 < compare2) {
                return -1;
              }
              if (compare1 > compare2) {
                return 1;
              }
        
              return 0;
        });

        updateOptions(sorted);
    }

    return(
        <select defaultValue = '' onChange = {props.change} name = {props.name} className="country" placeholder = 'country'>
            <option value = "" disabled>Select Country</option>
            {
                options.map((eachOption,index) =>{
                return <option key = {index} value = {eachOption.slug}>{eachOption.Country}</option>
                })
            }
        </select>
    );
}

export default Selector;