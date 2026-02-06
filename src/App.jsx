import { useEffect, useState } from "react";


const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
  fetch("https://dummyjson.com/products")
  .then((res)=>res.json())
  .then((data)=> setData(data.products))
},[])
  
  return (
    <div>
      {data.map((item,index)=>
      <div className="container" key={item.id}> 
      <img src={item.images[0]} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.discription}</p>
      <mark>{item.price}</mark>
      </div>
      )}
    </div>
  );
}

export default App;
