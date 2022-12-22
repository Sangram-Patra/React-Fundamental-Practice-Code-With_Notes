import React from 'react'
import PropTypes from 'prop-types'

const PropsExample =(props)=>{
    // {
    //     props.name='ram'; Cannot assign to props. Due to read only property
    // }
    return(
        <div>
            
            <h1>I Love  {props.name} her age is {props.age}.</h1>
        </div>
    )
    
    
    }
    //to pass a number we have to write like this: age={90}
    PropsExample.propTypes={
        name: PropTypes.string.isRequired,//isRequired means mandatory to pass
        age: PropTypes.number
    };
//If the prop value given then that is applicable but if not given then default value will be applicable .

PropsExample.defaultProps={
    name:'Gulu'
}
export default PropsExample;