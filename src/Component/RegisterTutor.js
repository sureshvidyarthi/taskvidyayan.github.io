import React,{useState,useEffect} from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {ServerURL,postDataAndImage,postData} from "./FetchNodeServices"
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f1f2f6',
        padding:30
     
    },
    subdiv:{
        padding:20,
        width:700,
        background:'#FFF'
    },
    input: {
        display: 'none',
    },
    
}));


export default function RegisterTutor(Props)
{ 
  const classes=useStyles();
     
  const [highestQualification,setHighestQualification]=useState('')
  const [status,setStatus]=useState('')
  const [collage,setCollage]=useState('')
  const [modeTeaching,setModeTeaching]=useState('')
  const [language,setLanguage]=useState('')
  const [selectClass,setSelectClass]=useState('')
  const [subject,setSubject]=useState('')
  const [board,setBoard]=useState('')
  const [timing,setTiming]=useState('')
  const [occupation,setOccupation]=useState('') 
  const [month1,setMonth1]=useState('')
  const [month2,setMonth2]=useState('') 
  
  const handleClick=async()=>{
    var formData= new FormData()

    formData.append("highestqualification",highestQualification)
    formData.append("status",status)
    formData.append("collage",collage)
    formData.append("modeteaching",modeTeaching)
    formData.append("language",language)
    formData.append("selectclass",selectClass)
    formData.append("subject",subject)
    formData.append("board",board)
    formData.append("timing",timing)
    formData.append("occupation",occupation)
    formData.append("month1",month1)
    formData.append("month2",month2)

    var config={headers:{"content-type":"multipart/form-data"}}
    var result= await postDataAndImage('registertutor/addregistertutordata',formData,config)
    alert(result)
  }
        
  return(

  <div className={classes.root}>
  
    <div className={classes.subdiv}>

    <Grid item xs={12}  style={{display:'flex', justifyContent:'center', alignItems:'center' }}>
    <div style={{fontSize:27,fontWeight:700,letterSpacing:2,pading:5}}>
      For Register as Tutor
     </div>
    </Grid>
     <Divider  style={{marginBottom:10,height:3,backgroundColor:'blue'}} />
    
      <Grid container spacing={1} style={{padding:10,}}>
 
      <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Highest Qualification</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setHighestQualification(event.target.value)}
                            label="Highest Qualification" >
                            <MenuItem value={'B.Tech'}>B.Tech</MenuItem>
                            <MenuItem value={'B.Com'}>B.Com</MenuItem> 
                            <MenuItem value={'Bsc'} >Bsc</MenuItem>
                            <MenuItem value={'MBA'}>MBA</MenuItem>
                            <MenuItem value={'M.Tech'}>M.Tech</MenuItem> 
                            <MenuItem value={'PHD'} >PHD</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem> 
                            <MenuItem value={'None'} >None</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setStatus(event.target.value)}
                            label="Status" >
                            <MenuItem value={'Pursuing'}>Pursuing</MenuItem>
                            <MenuItem value={'Completed'}>Completed</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12}  style={{padding:20}}>
                <TextField onChange={(event)=>setCollage(event.target.value)} label="Collage Name" variant="filled" fullWidth />
              </Grid>


             
              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Mode of Teaching</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setModeTeaching(event.target.value)}
                            label="Mode of Teaching" >
                            <MenuItem value={'Online'}>Online</MenuItem>
                            <MenuItem value={'Offline'}>Offline</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setLanguage(event.target.value)}
                            label="Language" >
                            <MenuItem value={'Hindi'}>Hindi</MenuItem>
                            <MenuItem value={'English'}>English</MenuItem> 
                            <MenuItem value={'Other'} >Other</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Select Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setSelectClass(event.target.value)}
                            label="Select Class" >
                            <MenuItem value={'12th'}>12th</MenuItem>
                            <MenuItem value={'11th'}>11th</MenuItem> 
                            <MenuItem value={'10th'} >10th</MenuItem>
                            <MenuItem value={'9th'}>9th</MenuItem>
                            <MenuItem value={'8th'}>8th</MenuItem> 
                            <MenuItem value={'7th'} >7th</MenuItem>
                            <MenuItem value={'6th'}>6th</MenuItem>
                            <MenuItem value={'5th'}>5th</MenuItem> 
                            <MenuItem value={'4th'} >4th</MenuItem> 
                            <MenuItem value={'3th'}>3th</MenuItem>
                            <MenuItem value={'2th'}>2th</MenuItem> 
                            <MenuItem value={'1th'} >1th</MenuItem>
                            <MenuItem value={'None'} >None</MenuItem>
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Select Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setSubject(event.target.value)}
                            label="Select Subject" >
                            <MenuItem value={'Science'}>Science</MenuItem>
                            <MenuItem value={'Biology'}>Biology</MenuItem> 
                            <MenuItem value={'Commerce'} >Commerce</MenuItem>
                            <MenuItem value={'Arts'} >Arts</MenuItem>
                            <MenuItem value={'Other'} >Other</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>


              <Grid item xs={12}  style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Select Board</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setBoard(event.target.value)}
                            label="Select Board" >
                            <MenuItem value={'CBSE'}>CBSE</MenuItem>
                            <MenuItem value={'ICSE'}>ICSE</MenuItem> 
                            <MenuItem value={'State'}>State</MenuItem> 
                            <MenuItem value={'None'} >None</MenuItem>
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Available Timing</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setTiming(event.target.value)}
                            label="Available Timing" >
                            <MenuItem value={'9am-12pm'}>9am-12pm</MenuItem>
                            <MenuItem value={'1pm-3pm'}>1pm-3pm</MenuItem> 
                            <MenuItem value={'4pm-6pm'}>4pm-6pm</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Current Occuption</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setOccupation(event.target.value)}
                            label="Current Occuption" >
                            <MenuItem value={'1-10'}>1-10</MenuItem>
                            <MenuItem value={'11-20'}>11-20</MenuItem> 
                            <MenuItem value={'21-30'} >21-30</MenuItem>
                            <MenuItem value={'31-40'} >31-40</MenuItem>
                            <MenuItem value={'41-50'} >41-50</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={3} style={{padding:20}}>
                <b style={{fontSize:25}}>Charges:-</b>
              </Grid>

              <Grid item xs={12} sm={1} style={{padding:20}}>
                <b>From</b>
              </Grid>

              <Grid item xs={12} sm={3} style={{padding:20}}>
                <TextField onChange={(event)=>setMonth1(event.target.value)} label="per Month" variant="filled" type="number" fullWidth />
              </Grid>

              <Grid item xs={12} sm={1} style={{padding:20}}>
                <b>To</b>
              </Grid>

              <Grid item xs={12} sm={3} style={{padding:20}}>
                <TextField onChange={(event)=>setMonth2(event.target.value)} label="per Month" variant="filled" type="number" fullWidth />
              </Grid>
                 
                <Grid item xs={12}  style={{display:'flex',justifyContent:'center',alignItems:'center',padding:20}}>
                  <Button  onClick={()=>handleClick()} variant="contained" style={{backgroundColor:"#8ceac6",fontWeight:"bold",padding:10,borderRadius:'30px',letterSpacing:3,}}>
                    <b style={{marginLeft:15,marginRight:15}}><a href='/studentdashboard'>Submit</a></b>
                  </Button>
                 </Grid>

      </Grid>
    </div>
  </div>
 
)}
 