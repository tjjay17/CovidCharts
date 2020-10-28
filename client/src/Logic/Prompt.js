import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Prompt = (props) =>{

    let [options,updateOptions] = useState([]);

    useEffect(() => {
        axios.get('https://api.covid19api.com/countries')
        .then(res => {
            sortOptions(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    

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
        <select onChange = {props.change} name = {props.name} className="country" placeholder = 'country'>
            <option value = "" disabled selected>Select Country</option>
            {
                options.map((eachOption,index) =>{
                return <option key = {index} value = {eachOption.slug}>{eachOption.Country}</option>
                })
            }
        </select>
    );
}

export default Prompt;