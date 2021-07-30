import React, { useEffect,useState } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {ServerURL,postDataAndImage,postData,getData} from "./FetchNodeServices"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles((theme) => ({
    root:{
        padding:10,
        display:'flex',
        flexDirection:'column'

    },
    paperstyle:{
        justifyContent:"flex-start",
        display:'flex',
        padding:3,
        width:280,
        margin:50,
        borderRadius:10,
        flexDirection:'column'
    },
    imageview:{
        width:160,
        height:160,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:2,
        cursor:"pointer",
        '&:hover':{
            transform:"scale(1.25)",
            transition:"all 0.5s ease 0s"
        }
    },
    arrowstyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }

}))

export default function DisplayStudentReq(props) 
{
    const classes = useStyles();
    const [listTutor,setListTutor]=useState([])


   
    const fetchTutor=async()=>{
        var list=await getData('registertutor/displayall')
        setListTutor(list)   
    }

    
    const showReqTutor=()=>{
        return listTutor.map((item)=>{
                return(
                    <div >
                      <Paper elevation={3} className={classes.paperstyle}>
                        <div  style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#ff6c06" }}>
                          <div style={{fontWeight:'bold',padding:10}}>
                           Sukku Tiwari
                          </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                        <span style={{fontWeight:'bold',padding:10}} >
                        HighestQualification-
                        </span>
                        <span>{item.highestqualification}</span>
                        </div>
                        <Divider />
                        <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                        <span style={{fontWeight:'bold',padding:10}} >
                        College-
                        </span>
                        <span>{item.collage}</span>
                        </div>
                        <Divider />
                        <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                        <span style={{fontWeight:'bold',padding:10}} >
                        Mode Of Teaching-
                        </span>
                        <span>{item.modeteaching}</span>
                        </div>
                        <Divider />
                        <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                        <span style={{fontWeight:'bold',padding:10}} >
                        Timing-
                        </span>
                        <span>{item.timing}</span>
                        </div>
                        <Divider />
                        <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                        <span style={{fontWeight:'bold',padding:10}} >
                        Fee-
                        </span>
                        <span>{item.month2}</span>
                        </div>
                        
                      </Paper>
                    </div>  
                )
            })
      }
        

    
useEffect(function(){
    fetchTutor()
  },[])
  
  return(
    
       
     <div className={classes.root} >

        <div style={{display:'flex',flexDirection:'column'}} >
            <div 
              style={{
                fontSize:30,
                    color: "#000",
                    fontWeight:'normal',
                    display: "flex",
                    letterSpacing: "3.9px",
                    padding: 10,
                    fontFamily:"-moz-initial",
                    fontWeight:"bold"
                    }} >
                 My Tutors
                </div>
                <Divider style={{color:'#000',background:"#000",width:180,marginTop:'-10px'}}/>
                
            
            <div style={{display:'flex',flexDirection:'row',justifyContent:"center",margin:20}} >
                {showReqTutor()}
            </div>
        </div>

    </div>
)



}