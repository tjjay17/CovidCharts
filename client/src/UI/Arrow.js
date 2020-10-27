import React from 'react';

const Arrow = (props) =>{
    return(
            <span className = {props.nameOfClass}>  
                <a href = {props.goTo}>
                    <i className="arrow fas fa-arrow-down fa-5x"></i>
                </a>
            </span>
    );
}

export default Arrow;