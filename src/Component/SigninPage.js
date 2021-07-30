import React, { useState, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch} from 'react-redux';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ReactDOM from "react-dom";
import OtpInput from 'react-otp-input';
import Countdown from "react-countdown";
import { FormatSize, PinDropSharp } from '@material-ui/icons';
import {ServerURL,postDataAndImage,postData} from "./FetchNodeServices"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import "./styles.css"
import swal from "sweetalert";
var otpGenerator = require('otp-generator')


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}




const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        
    },
    paper: {
         display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:30
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue. 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    otpfield: {
        width: "38px",
        marginRight: '10px',
        paddingLeft: ' 12px',
        height: '40px'
    }

}));

export default function SigninPage(props) {
    const classes = useStyles();
    const [state, setState] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [showbox, setshowbox] = useState(false)
    const [getUserData,setUserData]=useState([])
    const [otp,setOtp]=useState()
    const [getOtpInput, setOtpInput] = useState("");
    //const handleChange = (otp) => this.setState({ otp });
    var dispatch=useDispatch()
    
    const handleShowCart=()=>{
    if(otp==getOtpInput)
    {
    //alert(JSON.stringify(getUserData)) 
    dispatch({type:'ADD_USER',payload:[getUserData.mobileno,getUserData]}) 
    swal({
        title: "You are already registered",
        icon: "success",
        dangerMode: true,
        
      });
      props.history.push({'pathname':'/forolduser'})
    }
    else
    {
      alert("Invalid Case....")   
    }

    }

    const showOtp = () => {
        const Completionist = () => <span style={{ color: 'red', }}>Times Up!</span>;
        //var state = { otp: '' };

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',width:300 }}>
                
                <div style={{fontSize:17,color:'gray',}}>Please enter Otp sent to your mobile </div>
                <div style={{display:"flex",justifyContent:'row',margin:15,marginBottom:20}}>
                <span style={{fontSize:17,marginRight:10}}><b>XXXXXXXXXX</b></span>
                <span style={{fontSize:17,color:'#ff6c06'}}>Edit</span>
                </div>
                <OtpInput
                    value={getOtpInput}
                    onChange={(value)=>setOtpInput(value)}
                    inputStyle="inputStyle"  
                    numInputs={4}
                    separator={<span >-</span>}
                />
                <div style={{flexDirection:'column',margin:5}}>
                    <div>
                    waiting for otp
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Countdown date={Date.now() + 20000}>
                        <Completionist />
                    </Countdown>
                    </div>
                </div>
                <div style={{margin:25}}><Button
                 variant="contained"
                 fullWidth
                style={{background:'#ff6c06',color:'#FFF',width:250,borderRadius:"30px",marginTop:15}}
                 startIcon={<VerifiedUserIcon />}
                 onClick={()=>handleShowCart()}
               >
        Verify and Proceed
      </Button></div>
            </div>

        )

    }

   const handleOtpClick=async()=>{
    var body={mobileno:mobileNumber}
    var result= await postData("userdetail/checkusermobilenumber",body)
     alert(JSON.stringify(result))
    if(result.result)
    {
     setUserData(result.data)
      var otp=otpGenerator.generate(4, {digits:true,alphabets:false,specialChars:false,upperCase:false});
      alert(otp)

       var res=await postData("smsapi/sendotp",{otp:otp,mobileno:mobileNumber})
    
      setOtp(otp)
       setshowbox(!showbox)
    }
    else
    {
     props.history.push({'pathname':'/newUser'},{mobileno:mobileNumber})
    }
}



    const otpButton = () => {
        return (
            <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',padding:20 }}>
                <Button onClick={() =>handleOtpClick() }  style={{  height: 40,backgroundColor:'blue',color:'#fff',borderRadius:"30px" }}>
                    <b style={{letterSpacing:3,marginLeft:30,marginRight:30}}>Next</b>
                </Button>
            </div>
        )

    }

    return (
    
        
  <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:50 }}>
           
    <Grid container spacing={1}  >
            
            <Grid item xs={false} sm={4}  />
            <Grid item xs={12}  md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography >
                       <b style={{letterSpacing:1,color:'#ff6c06',fontSize:35}}> Vidyayan </b>
                    </Typography>
                    <div style={{ display: 'flex', margin:10 ,color:'#ff6c06'}}>let's get started</div>
                    <div style={{ display: 'flex', margin:15 ,fontSize:16}}>Enter your mobile number to sign in to your account</div>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            width={14}
                            id="mobilenumber"
                            onChange={(event)=>setMobileNumber(event.target.value)}
                            label="Enter Your Mobiile Number"
                            name="mobilenumber"
                            autoComplete="mobilenumber"
                            autoFocus
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91 | </InputAdornment>,
                            }}
                        />

                        <div>{otpButton()}</div>
                        {showbox ? showOtp() : <></>}

                        

                    </form>
                </div>
            </Grid>
        </Grid>
     </div>
        


    );
}