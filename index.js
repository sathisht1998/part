const express = require('express');
const app = express();

const course =[
    {id:1, name: 'sahish'},
    {id:2, name: 'sathish'},
    {id:3, name: 'sahtish'}
]
  

app.get('/', (req,res) => {
    res.send('hello world');
});
app.post('/api/courses',(req,res) => {
          
    
})
app.get('/api/course/:id', (req,res) =>{
    const courses = course.find( c => c.id === parseInt(req.params.id) );
    if(!courses){
        res.status(404).send('nothing found');
    }else{
        res.send(courses);
    }
});

//to assign a port through eniv varaiables

//adding branch to maggi

const PORT = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`Listening on port ${PORT}...`));