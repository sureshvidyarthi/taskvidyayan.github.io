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
    const [listStudent,setListStudent]=useState([])


   
      const fetchStudent=async()=>{
        var list=await getData('userdetail/displayall') 
        setListStudent(list)   
      }
    
    
    
      const showStud=()=>{
        return listStudent.map((item)=>{
                return(
                    <div >
                      <Paper elevation={3} className={classes.paperstyle}>
                          <div  style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#ff6c06" }}>
                            <div style={{fontWeight:'bold',padding:10}}>
                            {item.firstname} {item.lastname}
                            </div>
                          </div>
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Grade-
                          </span>
                          <span>12th</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Stream-
                          </span>
                          <span>Science</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Board-
                          </span>
                          <span>CBSC</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Email Id-
                          </span>
                          <span>{item.emailid}</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Mobile No.-
                          </span>
                          <span>1234567890</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Address-
                          </span>
                          <span>{item.currentaddress}</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          City-
                          </span>
                          <span>{item.city}</span>
                          </div>
                          <Divider />
                          <div style={{display:'flex',alignItems:'center',backgroundColor:'#f1f2f6' }}>
                          <span style={{fontWeight:'bold',padding:10}} >
                          Pin Code-
                          </span>
                          <span>{item.pincode}</span>
                          </div>
                          
                        </Paper>
                    </div>  
                )
            })
      }
      

    
useEffect(function(){
    fetchStudent()
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
                 My Student
                </div>
                <Divider style={{color:'#000',background:"#000",width:200,marginTop:'-10px'}}/>
                
            
            <div style={{display:'flex',flexDirection:'row',justifyContent:"center",margin:20}} >
                {showStud()}
            </div>
        </div>

    </div>
)



}