import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DisplayAllTutor from './DisplayAllTutor'
import DisplayTutorReq from './DisplayTutorReq'
import DisplayMyTutor from './DisplayMyTutor'
import Divider from "@material-ui/core/Divider"

import {useHistory} from "react-router-dom";

export default function ListItems(props){

  var history = useHistory();

  const handleClick=(v)=>{
    props.setComponent(v)
  };

  const handleLogout=()=>{
    localStorage.clear()
    history.replace({ pathname:'./adminlogin'})
  };

  
return (
  <div>
  <div>
   <ListItem button>
     <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="All Tutor" onClick={()=>handleClick(<DisplayAllTutor />)} />
    </ListItem>

    <Divider />
    
    <ListItem button>
     <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Requested Tutor" onClick={()=>handleClick(<DisplayTutorReq />)} />
    </ListItem>
     
     <Divider />

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Tutor" onClick={()=>handleClick(<DisplayMyTutor />)} />
    </ListItem>

    <Divider />

  </div>

 </div>
);
}