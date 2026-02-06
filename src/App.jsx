import { useEffect, useState } from "react";
import './app.css'


const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
  fetch("https://dummyjson.com/products")
  .then((res)=>res.json())
  .then((data)=> setData(data.products))
},[])
  
  return (
    <div>
      <div className="title">
      <h1>mahsulotlar</h1>
      </div>
      {data.map((item,index)=>
      <div className="container" key={index}> 
      <div className="carts">
        <div className="card">
      <img  src={item.images[0]} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.discription}</p>
      <mark>{item.price}</mark>
      <p>{item.rating}</p>
        </div>
        
      </div>
      </div>
      )}
    </div>
  );
}

export default App;
