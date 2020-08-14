import React from 'react';
import './App.css';
import UserDetails from './containers/userDetails';
import UserList from './containers/userList';
import FirstnameContainer from './containers/firstnamecontainer';
import LastnameContainer from './containers/lastnamecontainer';
import ScoreContainer from './containers/scorecontainer';
import DetailsContainer from './containers/detailscontainer';


function App() {
  return (
    <div>
     <FirstnameContainer></FirstnameContainer>
     <LastnameContainer></LastnameContainer>
     <ScoreContainer></ScoreContainer>
     <DetailsContainer></DetailsContainer>
    </div>
  );
}

export default App;
