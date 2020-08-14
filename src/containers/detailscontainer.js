import React from 'react';
import { connect } from 'react-redux';

class DetailsContainer extends React.Component {
    state = {  }
    render() { 
       
        return ( 
            <div style={{border:"1px solid grey",height:"300px",width:"200px"}}>
                
        <p>firstname: {this.props.firstname}</p> <p>lastname: {this.props.lastname}</p> @<p>score: {this.props.score}</p>
            </div>
          );
        }
    
}

function convertStoreToProps(store){
    console.log(store);
    return {
        firstname:store.firstname,
        lastname:store.lastname,
        score:store.score
    }


}
 
export default connect(convertStoreToProps)(DetailsContainer);