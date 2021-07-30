import React,{useState,useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {ServerURL,postDataAndImage,getData,postData} from "./FetchNodeServices";
import renderHTML from "react-render-html"



const useStyles = makeStyles((theme)=>({
       root:{
           justifyContent:'center',
           alignItems:'center',
           display:'flex',
           backgroundColor:'#f1f2f6',
            padding:60,
           
       },
       subdiv:{
        padding:20,
        width:600,
        background:'#FFF'
    },
    
    })
)

export default function RegisterStudent(props){
     const classes=useStyles()
     const[One,setone]=useState("")
     const[Two,settwo]=useState("")
     const[Three,setthree]=useState("")
     const[Four,setfour]=useState("")
     const[Five,setfive]=useState("")
     const[Six,setsix]=useState("")
     const[Seven,setseven]=useState("")
     const [Eight,seteight]=useState("")
     const [Nine,setnine]=useState("")
     const[Ten,setten]=useState("")
     const[Eleven,seteleven]=useState("")
     const[Twelve,settwelve]=useState("")

     const [Cbse,setcbse]=useState("")
     const [Icse,seticse]=useState("")
  
     const[State,setstate]=useState("")
     const[Pcm,setpcm]=useState("")
     const[Pcb,setpcb]=useState("")
     const[Com,setcom]=useState("")
     const[Arts,setarts]=useState("")
  

const handleClick=async()=>{
    var body={
    
        one:One,
        two:Two,
        three:Three,
        four:Four,
        five:Five,
        six:Six,
        seven:Seven,
        eight:Eight,
        nine:Nine,
        ten:Ten,
       eleven:Eleven,
        twelve:Twelve,
   
        cbse:Cbse,
        icse:Icse,
     
        state:State,
        pcm:Pcm,
        pcb:Pcb,
        com:Com,
       arts:Arts
       
    }
                  
    var result=await postData('registerstudent/addnewdata',body)
    alert(result)
   
}
           
   return(
    <div className={classes.root}>
    <div className={classes.subdiv}>
    <div style={{display:'flex',justifyContent:'center',color:'#f0932b',fontWeight:"bold",fontSize:30}} >Vidyayan</div>
            <div style={{display:'flex',justifyContent:'center',color:'#f0932b',marginBottom:40}} >Lets gain together</div>
        <Grid container spacing={1}>
            
        <Grid item xs={12} >
              

          <div style={{color:'#f0932b'}}>Select Your Class</div>
          <div style={{display:'flex',justifyContent:'center',marginTop:18}}>
               <span style={{display:'flex',paddingRight:45}}>
             <Button variant="contained"  color="primary" onClick={()=>settwelve("12th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>12th</Button>
             </span>
             <span style={{display:'flex',paddingRight:45}}>         
             <Button variant="contained"  color="primary" onClick={()=>seteleven("11th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>11th</Button> 
             </span>
             <span style={{display:'flex',paddingRight:45}}>
             <Button variant="contained"  color="primary" onClick={()=>setten("10th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>10th</Button>
             </span>
             <span style={{display:'flex',paddingRight:45}}>
             <Button variant="contained"  color="primary" onClick={()=>setnine("9th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>9th</Button>
             </span>
             </div>


             
             <div style={{display:'flex',justifyContent:'center',marginTop:18}}>
             <span style={{display:'flex',paddingRight:50}}>
             <Button variant="contained"  color="primary" onClick={()=>seteight("8th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>8th</Button>          
             </span>
             <span style={{display:'flex',paddingRight:45}}>
           
           <Button variant="contained"  color="primary" onClick={()=>setseven("7th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>7th</Button> 
           </span>
           <span style={{display:'flex',paddingRight:45}}>
         
           <Button variant="contained"  color="primary" onClick={()=>setsix("6th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>6th</Button>
           </span>
           <span style={{display:'flex',paddingRight:45}}>
         
           <Button variant="contained"  color="primary" onClick={()=>setfive("5th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>5th</Button>
           </span>
           </div>



           <div style={{display:'flex',justifyContent:'center',marginTop:18}}>
           <span style={{display:'flex',paddingRight:50}}>
         
           <Button variant="contained"  color="primary" onClick={()=>setfour("4th")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>4th</Button>          
           </span>
           <span style={{display:'flex',paddingRight:50}}>
           
           <Button variant="contained"  color="primary" onClick={()=>setthree("3rd")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>3rd</Button> 
           </span>
           <span style={{display:'flex',paddingRight:50}}>
         
           <Button variant="contained"  color="primary" onClick={()=>settwo("2nd")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>2nd</Button>
           </span>
           <span style={{display:'flex',paddingRight:50}}>
         
           <Button variant="contained"  color="primary" onClick={()=>setone("1st")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>1st</Button>
           </span>
           </div>



           <div style={{color:'#f0932b',marginTop:30}}>Select Your Board</div>
           <div style={{display:'flex',justifyContent:'center',marginTop:18}}>
           <span  style={{display:'flex',paddingRight:50}}>
           <Button variant="contained"  color="primary" onClick={()=>setcbse("CBSE")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>CBSE</Button>          
           </span>
           <span  style={{display:'flex',paddingRight:50}}>
           
           <Button variant="contained"  color="primary" onClick={()=>seticse("ICSE")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>ICSE</Button> 
           </span>
           <span  style={{display:'flex',paddingRight:140}}>
         
           <Button variant="contained"  color="primary" onClick={()=>setstate("State")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>State</Button>
           </span>
           </div>



           <div style={{color:'#f0932b',marginTop:30}}>Select Your stream</div>
           <div style={{display:'flex',justifyContent:'center',marginTop:18}}>
           <span style={{display:'flex',paddingRight:50}}>
           <Button variant="contained"  color="primary" onClick={()=>setpcm("PCM")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>PCM</Button>          
           </span>

           <span style={{display:'flex',paddingRight:50}}>
           <Button variant="contained"  color="primary" onClick={()=>setpcb("PCB")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>PCB</Button> 
           </span>
           <span style={{display:'flex',paddingRight:50}}>
           <Button variant="contained"  color="primary" onClick={()=>setcom("Com")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>Com</Button>
           </span>
           <span style={{display:'flex',paddingRight:30}}>
           <Button variant="contained"  color="primary" onClick={()=>setarts("Arts")} style={{height:'30px',borderRadius:'50px',backgroundColor:'#f0932b'}}>Arts</Button>
           </span>
           </div>
         </Grid>
            <Grid item xs={12}  style={{display:'flex',justifyContent:'center',alignItems:'center',padding:30}}>
                  <Button  onClick={()=>handleClick()} variant="contained" style={{backgroundColor:"#8ceac6",fontWeight:"bold",padding:10,borderRadius:'30px',letterSpacing:3,}}>
                      <b style={{marginLeft:15,marginRight:15}}><a href='/tutordashboard'>Submit</a></b>
                   </Button>
                 </Grid>

            
        </Grid>

    </div>

</div>

   )
}













