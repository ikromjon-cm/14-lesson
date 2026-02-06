import { useEffect, useState } from "react";


const App = () => {
  const [data,setData] = useState([])

  useEffect(()=>
  fetch("https://dummyjson.com/products")
  .then((res)=>res.json())
  )
  return (
    <div>
      
    </div>
  );
}

export default App;
