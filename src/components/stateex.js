import React, { Component } from 'react'
class StateEx extends Component{
    constructor(){
        super();
        this.state={
            what:'I Love U Gulu Dhana Bahut Sara'
        }
    }
    
    render(){
        return(
            <>
                <h1>{this.what}</h1>
                <button class="btn btn-success"  onClick="eventHandel">UUUUUUUMMMMM</button>
            </>
        )
    }

}
const eventHandel=()=>{
    this.setState({
        what:'UUUUUUUUUUUUMMMMMMMMMMMMMMMMM'
    })
}
export default StateEx;