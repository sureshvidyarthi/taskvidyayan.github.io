import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function ForOldUser(props)
{
    const handleClick1=()=>{
        props.history.push({'pathname':'/tutordashboard'})
    }

    const handleClick=()=>{
        props.history.push({'pathname':'/studentdashboard'})
    }

    return(<div>
        <div style={{display:'flex',justifyContent:'center',alignSelf:'center',marginTop:250}}>
          <b style={{fontSize:40}}>FOR OLD USER</b>  
        </div>
        <div style={{display:'flex',justifyContent:'center',alignSelf:'center',color:'gray'}}>Click Here...</div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'row',alignSelf:'center',marginTop:20}}>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'row',alignSelf:'center',margin:20}} >
            <Button onClick={()=>handleClick()} fullWidth variant="contained" style={{backgroundColor:"#8ceac6",fontWeight:"bold",padding:10,borderRadius:'30px',width:250}}>Tutor Dashboard</Button>
            </div>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'row',alignSelf:'center',margin:20}}>
            <Button onClick={()=>handleClick1()} fullWidth variant="contained" style={{backgroundColor:"#8ceac6",fontWeight:"bold",padding:10,borderRadius:'30px',width:250}}>Student Dashboard</Button>
            </div>
        </div>
        </div>
    )
}