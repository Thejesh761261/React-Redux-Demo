import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {
    state = {  }
    render() { 

        if(this.props.user===null){
            return (
                <div>Please Click the User</div>
            )
        }else{
        return ( 
            <div>
                <h1>Click User above to see Details</h1>
                <br />
                <ul>
                    <li>Since: {this.props.user.since}</li>
                    <li>Location: {this.props.user.location}</li>
                </ul>

            </div>
         );
    }
}
}

function storeToPropsForUserdetails(store){
    return {
       user:store.userClicked
    }
}
 
export default connect(storeToPropsForUserdetails)(UserDetails);