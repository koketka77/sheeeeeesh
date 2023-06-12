import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react"
import axios from 'axios'


function App() {
  const [data, setData] = useState({})
  const getWeather = (city) =>{
    const KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(API)
    .then(({data}) => {
      console.log(data);
      setData(data)
    }).then()
  }
  return (
  
    <div className="wrapper">
     <Form getWeather={getWeather}/>
     <Table data = {data}/>
    </div>
  );
}

export default App;
