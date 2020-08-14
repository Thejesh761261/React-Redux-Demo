import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userClicked from '../actions/userClicked';

class UserList extends React.Component {
    state = {  }

    getList=()=>{
        return this.props.users.map(u=>{
            return (
                <li key={u.id} onClick={()=>this.props.userClicked(u)}>
                    {u.name}
                </li>
                )
            })
        
    }
    render() { 
        return ( 
            <div>
               <h1>User List</h1>
               <ol>
               {this.getList()}
               </ol>
            </div>
         );
    }
}

function convertStoreToProps(store){
console.log(store);
    return {
        users:store.users
    }

}
 
function eventToPropsAndDispatch(dispatch){
    return bindActionCreators({
        userClicked:userClicked
    },dispatch);
}

export default connect(convertStoreToProps,eventToPropsAndDispatch)(UserList);