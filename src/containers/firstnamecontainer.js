import React from 'react';
import { bindActionCreators } from 'redux';
import addFirstname from '../actions/actionBroadcastWithFirstname';
import { connect } from 'react-redux';

class FirstnameContainer extends React.Component {
    state = { 
        fn:''
     }
     
     firstNameChange=(e)=>{
        this.setState({fn:e.target.value})
     }

    render() { 
        return (
            <div style={{border:"1px solid grey",height:"10%",width:"200px"}}>
                <input type="text" id="fn" placeholder="Enter first name" onChange={this.firstNameChange}></input>
                <button type="submit" onClick={()=>this.props.firstnameAddClicked(this.state.fn)}>Add</button>
            </div>
          );
    }
}
 
function eventToPropsAndDispatch(dispatch){
    return bindActionCreators({
        firstnameAddClicked:addFirstname
    },dispatch);
}

export default connect(null,eventToPropsAndDispatch)(FirstnameContainer);