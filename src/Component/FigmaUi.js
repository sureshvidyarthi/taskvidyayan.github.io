import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paperstyle:{
        justifyContent:"center",
        display:'flex',
        padding:10,
        width:550,
        height:280,
        margin:60,
        borderRadius:'15px',
        backgroundColor:"#B264F7",
        flexDirection:'column',
        cursor:"pointer",
        "&:hover":{
          transform:"scale(1.25)",
          tansition:"all 0.5s ease 0s"
        }
      },
      
     title:{
      position: 'absolute',
      width: '164px',
      height: '47px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '50px',
      lineHeight: '47px',
      color:'#fff'
   },
   appbar: {
      position: 'absolute',
      height: '79px',
      backgroundColor:"#F54007",
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      
   },
      
  }));
  

export default function FigmaUi(){
    const classes = useStyles();
   
    return(
        <div className={classes.root}>
             
            <AppBar position="static"  className={classes.appbar}>
                <Toolbar>
                   <Typography  className={classes.title}>
                     Vidyayan
                   </Typography>
                </Toolbar>
            </AppBar>

            <div style={{padding:40,background:"#f9f5f2",}}>

              <Grid item={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom:20,padding:40,marginTop:30}}>
                <Grid item sm={5}  >
                    <div style={{fontWeight:'bold',fontSize:'50px',fontFamily: 'Roboto',fontStyle: 'normal'}}>
                       <div style={{color:"#000",}}>Set Your Child Up</div>
                       <div style={{color:'red'}}>For Success</div>
                    </div>
                    <div style={{fontSize:15,fontFamily:"monospace",color:'gray',marginTop:40}}>banner-new 1</div>
                    
                    <Grid style={{border:" 1px solid rgba(0, 0, 0, 0.05)",background: "linear-gradient(90deg, #41237E 54.69%, #92125F 100%)",borderRadius:"10px",padding:3,width:'600px'}}>
                      <img src="/file.png" width="20%" height="10%" />
                      <Button style={{backgroundColor:"#e84393",color:"#fff",marginLeft:"17%",width:"25%",}}  >
                         <b>Book Now</b>
                       </Button>
                      <img src="/ss.png" width="20%" height="10%"style={{borderRadius:"80px",marginLeft:"17%"}} />
                    </Grid>
                </Grid>
                <Grid item sm={3}  >
                  <img src="/creating 1.png" width="370px" height="390px"  />
                </Grid>
              </Grid>
            </div>

            <div style={{border:" 1px solid rgba(0, 0, 0, 0.05)",background:"#F2C7B9",}}>
               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:"-7px"}} >
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#fff',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>KG - 3</Grid>
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#fff',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>4 - 10</Grid>
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#fff',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>11 - 12</Grid>
               </Grid>
               <Divider  style={{backgroundColor:"#cd84f1",marginTop:"-7px"}}/>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',flexWrap:'wrap',alignItems:'center',flexDirection:'row',marginTop:100,}}>
                   <Grid item sm={4} >
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center",marginTop:'-100px'}}>
                            <img src="./badge1 1.png" style={{width: '200px',height: '260px'}} />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:30,fontWeight:"bold",marginTop:20}}>Creativity and Imagination</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center",marginTop:'-100px'}}>
                           <img src="./badge2 1.png" style={{width: '180px',height: '260px',marginRight:15}} />
                           <img src="./badge3 1.png" style={{width: '180px',height: '260px'}} />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:30,fontWeight:"bold",marginTop:20}}>Communication</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center",marginTop:'-100px'}}>
                            <img src="./badge4 1.png" style={{width: '200px',height: '240px'}} />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:30,fontWeight:"bold",marginTop:10}}>Critical thinking and <br />problem solving</div>
                      </Paper>
                   </Grid>
               </Grid>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom:40}}>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center",marginTop:'-100px'}}>
                            <img src="./badge5 1.png" style={{width: '200px',height: '260px'}} />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:30,fontWeight:"bold",marginTop:20}}>Computation Thinking</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center",marginTop:'-100px'}}>
                            <img src="./badge6 1.png" style={{width: '200px',height: '260px'}} />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:30,fontWeight:"bold",marginTop:20}}>Social Emotional Literacy</div>
                      </Paper>
                   </Grid>
               </Grid>

            </div>


            <div style={{border:" 1px solid rgba(0, 0, 0, 0.05)",}}>
               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:'-8px'}} >
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#B264F7',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>KG - 3</Grid>
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#fff',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>4 - 10</Grid>
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#B264F7',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>11 - 12</Grid>
               </Grid>
               <Divider  style={{backgroundColor:"#cd84f1",marginTop:"-7px"}}/>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:40,}}>
                   <Grid item sm={4} >
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/calculator 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold"}}>Mathematics</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}>
                             <img src="/biology 1.png" width="38%" style={{marginRight:15}} />
                             <img src="/science 1.png" width="38%"   />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold"}}>Science</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/blocks 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>English</div>
                      </Paper>
                   </Grid>
               </Grid>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom:40}}>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/globe 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Social Science</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/code 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Coding</div>
                      </Paper>
                   </Grid>
               </Grid>
            </div>

            <div style={{border:" 1px solid rgba(0, 0, 0, 0.05)",backgroundColor:"#DEC4EE"}}>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:'-8px'}} >
               <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#B264F7',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>KG - 3</Grid>
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#B264F7',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>4 - 10</Grid>
                   <Grid  sm={1} style={{backgroundColor:"#B264F7",border:" 3px solid rgba(0, 0, 0, 0.05)",display:"flex",justifyContent:"center",padding:20,color:'#fff',borderRadius:'10px',cursor:"pointer",width:'190px',height:"70px",fontWeight:"bold",margin:7}}>11 - 12</Grid>
               </Grid>
               <Divider  style={{backgroundColor:"#cd84f1",marginTop:"-7px"}}/>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:40,}}>
                   <Grid item sm={4} >
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/calculator 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Mathematics</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}>
                             <img src="/magnet 1.png" width="38%"  />
                          </div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Physics</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/science 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Chemistry</div>
                      </Paper>
                   </Grid>
               </Grid>

               <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom:40}}>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/biology 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Biology</div>
                      </Paper>
                   </Grid>
                   <Grid item sm={4}>
                      <Paper elevation={3} className={classes.paperstyle} >
                         <div style={{display:"flex",justifyContent:"center"}}><img src="/code 1.png" width="38%"  /></div>
                         <div style={{display:"flex",justifyContent:"center",fontSize:35,fontWeight:"bold",marginTop:'10px'}}>Computer Science</div>
                      </Paper>
                   </Grid>
               </Grid>

            </div>

        </div>
    )
};