import { useEffect, useState } from "react";
import './app.css'


const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products))
  }, [])

  return (
    <div>
        <h1 className="title">mahsulotlar</h1>
        <div className="container">
          {data.map((item,index)=>{
            return(
              <div key={index} class="card">
                <img src={item.images[0]} alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <b>{item.price}</b>
               {item.tags.map((element)=>
                <mark>#{element}</mark>              
              )}
              <button>add to card</button>
              </div>
            )
          })}
        </div>
     
    </div>
  );
}

export default App;
