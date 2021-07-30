var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer')


/* GET home page. */
router.post('/addnewdata',upload.any(), function(req, res, next) {
    console.log(req.body);
    
  pool.query("insert into registerstudent (id,one,two,three,four, five, six, seven, eight,nine,ten, eleven, twelve, cbse, icse, state,pcm,pcb,com,arts) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [req.body.id,
   req.body.one,
   req.body.two,
   req.body.three,
   req.body.four,
   req.body.five,
   req.body.six,
   req.body.seven,
   req.body.eight,
   req.body.nine,
   req.body.ten,
   req.body.eleven,
   req.body.twelve,
   req.body.cbse,
   req.body.icse,
   req.body.state,
   req.body.pcm,
   req.body.pcb,
   req.body.com,
   req.body.arts,], function(error,result){
    if(error){
        console.log(error)
        res.status(500).json([])
    }
    else{
        res.status(200).json(result)
    }
})
});

router.get('/displayall',function(req,res){
    pool.query("select * from registerstudent", function(error,result){
        if(error){
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }

    }) 

})



module.exports = router;