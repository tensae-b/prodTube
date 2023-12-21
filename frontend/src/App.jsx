import {React, useState, useEffect}from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import axios from 'axios'
import CardView from '../components/CardView'


function App() {
  const YoutubeVideos=[];
  const [search, setSearch]= useState("")

  const [video, setVideo] = useState([]);
  const[videoView,setVideoView]=useState({
    clicked: false,
    vidUrl: ""
  }) 


  // useEffect(() => {
  //   fetch("http://localhost:3000",)
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);
  
  useEffect(() => {
    const url="https://www.youtube.com/embed/"
    if(search != ""){
    fetch(`http://localhost:3000/search?search_query=${search}`)
      .then(res=>res.json())
      .then((data)=>{
        // console.log(data.items)
          for(let i=0; i< data.items.length; i++){
            
            YoutubeVideos.push( {
              id: data.items[i].id.videoId,
              title: data.items[i].snippet.title,
              description:data.items[i].snippet.description,
              thumbnail: data.items[i].snippet.thumbnails.high.url,
              videoUrl: url+data.items[i].id.videoId
            })
            setVideo(
              YoutubeVideos
            )
          }
          // console.log(YoutubeVideos);
        
          // data.items.map((item)=>
          // setVideo( prevState=>{
          //   return{
          //     ...prevState,
          //     title: item.snippet.title,
          //     description:item.snippet.description,
          //     thumbnail: item.snippet.thumbnails.default.url,
          //     videoId: item.id.videoId,
          //   }
          // })
           
          //  )
          
      } )
      .catch(err=>{
        console.log(err);
      })
    }
    }, [search]);
  
  function searchText(text){
    setSearch(text)
   
    YoutubeVideos.splice(0, YoutubeVideos.length)
    // axios.post("http://localhost:3000/search", search)
    // .then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
  }

  function view(click, url){
    setVideoView(prevState=> ({
      ...prevState,
      clicked: click,
      vidUrl: url

    }) )
    

  }
  const videos=video.map(videos =>
    {
      // console.log("video",videos)
 return(
        
        <Cards
        key={videos.id}
        {...videos}
        view= {view}
        
      />

 )
    }
    
)
 
  return (
   <div >
    <Navbar
    
    search={searchText}
   
    />
   
   { !videoView.clicked && <div className="cards">
    {videos}
    </div>}

    {videoView.clicked && <CardView
    videoUrl= {videoView.vidUrl}
    />}
   </div>
  )
}

export default App
