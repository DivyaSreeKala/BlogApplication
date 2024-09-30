const express = require("express");
const router = express.Router();

const blogModel = require("../model.js");

router.use(express.json());//json data
router.use(express.urlencoded({extended:true}));



//get

router.get('/', async (req, res) => {
    try{
        const  data = await blogModel.find();
        res.status(200).send(data);
    }catch(err){
        res.status(404).send("Error in fetching data");
    }
});

//post
router.post('/add', async (req, res) => {
    try{
        const data = new blogModel(req.body);
        const savedData = await data.save()
        
        res.status(200).send(savedData);
    }catch(err){
        res.status(404).send("Error in adding data");
    }
});

//put
router.put('/edit/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = new blogModel(req.body);
        const resData = await blogModel.findByIdAndUpdate(id,req.body)
        
        res.status(200).send(resData);
    }catch(err){
        res.status(404).send("Error in updating data");
    }
});

//delete
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const resData = await blogModel.findByIdAndDelete(id);
        
        res.status(200).send(resData);
    }catch(err){
        res.status(404).send("Error in deletion");
    }
});


module.exports = router;