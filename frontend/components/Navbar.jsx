import {React, useState, useEffect} from 'react'

const Navbar = (props) => {
  // const[searchedText, setSearchedText]= React.useState("");
  let searchedText=""

function handleChange(event){
  // const{value}= event.target;
  // setSearchedText(value);
  searchedText= event.target.value;
  // console.log(searchedText)
}

function handleSubmit(event){
      event.preventDefault();
  
}
  return (
    <div>
      <form className="nav-bar" onSubmit={handleSubmit}>
      <input className="search-input" type="text" placeholder= "Search "onChange={handleChange}/>
      <button className="search-button" onClick={()=>{
        
        props.search(searchedText)
      }}>search</button>
    </form>
    </div>
  )
}

export default Navbar
