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

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDispatch } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import { FormatSize } from "@material-ui/icons";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import swal from "sweetalert";
import "./styles.css";
var otpGenerator = require("otp-generator");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright Â© "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
     
    },
    subdiv:{
        padding:20,
        width:700,
        marginTop:20,
        background:'#FFF'
    },
    input: {
        display: 'none',
    },
    avatar: {
      margin: theme.spacing(0.5),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    otpfield: {
      width: "38px",
      marginRight: "10px",
      paddingLeft: " 12px",
      height: "40px",
    },
  
    
}));


export default function NewUser(props)
{ 
  const classes=useStyles();

  const [state, setState] = useState("");
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [fatherFirstName,setFatherFirstName]=useState('')
  const [fatherLastName,setFatherLastName]=useState('')
  const [gender,setGender]=useState('')
  const [dob,setDob]=useState('')
  const [emailId,setEmailId]=useState('')
  const [currentAddress,setCurrentAddress]=useState('')
  const [city,setCity]=useState('')
  const [pinCode,setPinCode]=useState('') 
  
  var dispatch=useDispatch();
  const [mobileNumber, setMobileNumber] = useState(
    props.history.location.state.mobileno
  );
  const [otp, setOtp] = useState("");
  const [getOtpInput, setOtpInput] = useState("");

  const [showbox, setshowbox] = useState(false);
  //const handleChange = (otp) => this.setState({ otp });

  const otpGeneratorFn = () => {
    var otp = otpGenerator.generate(4, {
      digits: true,
      alphabets: false,
      specialChars: false,
      upperCase: false,
    });
    alert(otp);
    setOtp(otp);
  };

  const handleSubmit = async () => {
    alert(otp + "," + getOtpInput);
    if (otp == getOtpInput) {
      var body = {
        emailid: emailId,
        mobileno: mobileNumber,
        firstname: firstName,
        lastname: lastName,
        fatherfirstname: fatherFirstName,
        fatherlastname: fatherLastName,
        gender: gender,
        dob: dob,
        currentaddress: currentAddress,
        city: city,
        pincode: pinCode,

      };
      var result = await postData("userdetail/insertuserdetails", body);
      if (result.result) {

        var body = { mobileno: mobileNumber };
        var res = await postData("userdetail/checkusermobilenumber", body);
  
        if (res.result) {
          dispatch({
            type: "ADD_USER",
            payload: [res.data.mobileno, res.data],
          });
          swal({
            title: "Registration Successful",
            icon: "success",
            dangerMode: true,
          });
          props.history.push({'pathname':"/registerStudent"})
        }
      
      } else {
        swal({
          title: "Registration Fail",
          icon: "success",
          dangerMode: true,
        });
      }
    } else {
      alert("Invalid Otp....");
    }
  };

  const handleSubmit1 = async () => {
    alert(otp + "," + getOtpInput);
    if (otp == getOtpInput) {
      var body = {
        emailid: emailId,
        mobileno: mobileNumber,
        firstname: firstName,
        lastname: lastName,
        fatherfirstname: fatherFirstName,
        fatherlastname: fatherLastName,
        gender: gender,
        dob: dob,
        currentaddress: currentAddress,
        city: city,
        pincode: pinCode,

      };
      var result = await postData("userdetail/insertuserdetails", body);
      if (result.result) {

        var body = { mobileno: mobileNumber };
        var res = await postData("userdetail/checkusermobilenumber", body);
  
        if (res.result) {
          dispatch({
            type: "ADD_USER",
            payload: [res.data.mobileno, res.data],
          });
          swal({
            title: "Registration Successful",
            icon: "success",
            dangerMode: true,
          });
          
          props.history.push({'pathname':"/registertutor"})
        }
      
      } else {
        swal({
          title: "Registration Fail",
          icon: "success",
          dangerMode: true,
        });
      }
    } else {
      alert("Invalid Otp....");
    }
  };


  useEffect(function () {
    otpGeneratorFn();
  }, []);

  const showOtp = () => {
    const Completionist = () => <span style={{ color: 'red', }}>Times Up!</span>;
    //var state = { otp: '' };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginLeft:50 }}>
            
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
            <div style={{margin:5}}>
                <div>
                waiting for otp
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Countdown date={Date.now() + 20000}>
                    <Completionist />
                </Countdown>
                </div>
            </div>
            <div style={{flexDirection:"row",display:"flex"}}>
            <div>
              <Button onClick={()=>handleSubmit()}  fullWidth variant="contained" style={{backgroundColor:"#8ceac6",fontWeight:"bold",padding:10,borderRadius:'30px',width:250}}>Register As Student</Button>
            </div>
            <div style={{marginLeft:20}} >
              <Button onClick={()=>handleSubmit1()} fullWidth variant="contained" style={{backgroundColor:"#8ceac6",fontWeight:"bold",padding:10,borderRadius:'30px',width:250}}>Register As Tutore</Button>
            </div>
          </div>
        </div>

    )

}


  return(
  <div className={classes.root}>
    <div className={classes.subdiv}>
      
    <Grid item xs={12}  style={{display:'flex', justifyContent:'center', alignItems:'center' }}>
      <div style={{fontSize:28,fontWeight:700,letterSpacing:2,marginBottom:20}}>
        For New User
       </div>
    </Grid>

      <Grid container spacing={1} style={{border:"4px solid",borderColor:"#8ceac6",padding:20,}}>
 
             <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setFirstName(event.target.value)} label="First Name" variant="filled" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setLastName(event.target.value)} label="Last Name" variant="filled" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setFatherFirstName(event.target.value)} label="Father's First Name" variant="filled" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setFatherLastName(event.target.value)} label="Father's Last Name" variant="filled" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <FormControl variant="filled" fullWidth className={classes.formControl}>
                       <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            //value={age}
                            onChange={(event)=>setGender(event.target.value)}
                            label="Gender" >
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem> 
                            <MenuItem value={'Other'} >Other</MenuItem> 
                        </Select>
                    </FormControl> 
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setDob(event.target.value)} label="Date Of Birth" variant='filled'  type="date"  InputLabelProps={{  shrink: true,}} fullWidth />
              </Grid>

              <Grid item xs={12}  style={{padding:20}}>
                <TextField onChange={(event)=>setEmailId(event.target.value)} label="Email Address" variant="filled" fullWidth />
              </Grid>

              <Grid item xs={12}  style={{padding:20}}>
                <TextField onChange={(event)=>setCurrentAddress(event.target.value)} label="Current Address" variant="filled" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setCity(event.target.value)} label="City" variant="filled" fullWidth />
              </Grid>
 
              <Grid item xs={12} sm={6} style={{padding:20}}>
                <TextField onChange={(event)=>setPinCode(event.target.value)} label="Pin Code" variant="filled" type="number" fullWidth />
              </Grid>
              
              {showOtp()}

      </Grid>
    </div>
  </div>

)}
 