import React,{Component} from 'react'
import ReactDOM from 'react-dom/client';
import PropsEx from './components/propsex';
import HookEx from './components/hooksex';
import StateEx from './components/stateex';
class  PropEx extends Component{
    render(){
        return(
            <>
            <center>
            <PropsEx  age={16}/>
            <hr/>
            <HookEx/>
            <hr/>
            <StateEx what="I Love U Gulu Dhana Bahut Sara "/>
            </center>
            </>
        )
    }
}
export default PropEx
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<PropEx/>);
