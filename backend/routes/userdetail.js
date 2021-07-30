var express = require('express');
var router = express.Router();
var pool = require("./pool");
/* GET users listing. */

router.post('/checkusermobilenumber', function(req, res, next) {
  pool.query("select * from userdetails where mobileno=? ",[req.body.mobileno],function(error,result){
   if(error)
   {  console.log(error)
       res.status(500).json({result:false})}
   else
   { if(result.length==1) 
       
    res.status(200).json({result:true,data:result[0]})
    else
    res.status(200).json({result:false})
   }
  })
});

router.post('/insertuserdetails', function(req, res, next) {
  pool.query("insert into userdetails set emailid=?,mobileno=?,firstname=?,lastname=?,fatherfirstname=?,fatherlastname=?,gender=?,dob=?,currentaddress=?,city=?,pincode=?,status='active' ",
  [
    req.body.emailid,
    req.body.mobileno,
    req.body.firstname,
    req.body.lastname,
    req.body.fatherfirstname,
    req.body.fatherlastname,
    req.body.gender,
    req.body.dob,
    req.body.currentaddress,
    req.body.city,
    req.body.pincode,
  ],
  function(error,result){
   if(error)
   {  console.log(error)
       res.status(500).json({result:false})}
   else
   {   
    res.status(200).json({result:true})
   }
  })
});

router.get('/displayall',function(req,res){
  pool.query("select * from userdetails", function(error,result){
      if(error){
          res.status(500).json([])
      }
      else{
          res.status(200).json(result)
      }

  }) 

})



module.exports = router;
