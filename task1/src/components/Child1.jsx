import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export class Child1 extends Component{
    render(){
        return(
            <> 
            <div>
                Child1
                <Link to={'/child2'}><span>Child2</span></Link>
                <Link to={'/child3'}><span>Child3</span></Link>
                <Link to={'/child4'}><span>Child4</span></Link>
            </div>
            </>
        )
    }
}
export default Child1