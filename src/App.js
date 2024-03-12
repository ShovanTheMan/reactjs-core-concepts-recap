import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
     <District name="Barishal" speciality="Nature"></District>
     <District name="Barguna" speciality="River"></District>
     <District name="Bandorban" speciality="Pahar"></District>
    </div>
  );
}
function LoadPosts(){
  const [posts,setPosts] = useState();
  useEffect ( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  } ,[])


  return(
    <div>
      <h1>Posts:{posts.length} </h1>
    </div>
  )
}

const districtStyle = {
  backgroundColor:'orange',
  margin:'10px',
  borderRadius:'20px',
  padding:'10px'
}
function District(props){
   const [power, setPower] = useState(1);
   const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
   }
  return (
    
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
       <p>Speciality:{props.speciality}</p>
       <h2>Power:{power}</h2>
       <button onClick={boostPower}>Boost the button</button>
    </div>
  )
}
export default App;
