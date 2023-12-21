const express = require('express');
const cors = require('cors');
const axios= require('axios')
const path = require('path');
const app= express();
const port= 3000;
const apiKey= "AIzaSyCzAFTOGWlyYbi-3_FvOtenJ6ReVxV7rJs";
const baseApiUrl="https://www.googleapis.com/youtube/v3";


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>[
    res.json({
        message: "be Productive"
    })
//    res.sendFile(path.join(__dirname+'/index.html'))
]);

app.get('/search',async(req,res,next)=>{
    try{
        
        const searchQuery=req.query.search_query;
        // console.log(searchQuery);
        const url= `${baseApiUrl}/search?key=${apiKey}&type=video&part=snippet&maxResults=9&q=${searchQuery}`;
        const response= await axios.get(url);
       
        // const thumbnail= response.data.items.map((item)=> item.snippet.thumbnails.default)
        // console.log(thumbnail[0])
       
        
        res.send(response.data);
        // console.log(response.data.items);

    }catch(err){
     next(err);
    }
  
})

app.listen(port,()=>{
    console.log("success")
})