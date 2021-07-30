var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload=require('./multer')
const e=require('express')

/* GET home page. */

router.post('/addregistertutordata',upload.any(), function(req, res, next) {
  console.log(req.body)
    pool.query("insert into registertutor (id,highestqualification,status,collage,modeteaching,language,selectclass,subject,board,timing,occupation,month1,month2)values(?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
        req.body.id,
        req.body.highestqualification,
        req.body.status,
        req.body.collage,
        req.body.modeteaching,
        req.body.language,
        req.body.selectclass,
        req.body.subject,
        req.body.board,
        req.body.timing,
        req.body.occupation,
        req.body.month1,
        req.body.month2,
    ],
    function(error,result){
       console.log(req.body)
        if(error)
        {console.log(error)
            res.status(500).json({result:false})
        }
        else
        {
            console.log(result)
            res.status(200).json({result:true})
        }
    })
  
});

router.get('/displayall',function(req,res){
    pool.query("select * from registertutor", function(error,result){
        if(error){
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }

    }) 

})

  




  module.exports = router;
  