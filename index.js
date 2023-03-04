//1. import express
const express = require("express");
const cors = require('cors');
const CourseInfo = require("./models/courseDb");
const app = new express();
app.use(cors());
const path = require('path');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/build')));

app.get('/api/view', async (req, res) => {
    try {
        let result = await CourseInfo.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.post('/api/create', async (req,res)=>{
    try {

        let course = new CourseInfo(req.body)
        course.save(); 
        res.json(course);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


// Delete a movie
app.post('/api/remove', async (req,res)=>{
    try {
        await CourseInfo.findByIdAndDelete(req.body._id);
        res.send("data deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/build/index.html'));
 });
// 4. Setting Port number
app.listen(5001, ()=>{
    console.log("Server is running in Port 5001")
})
