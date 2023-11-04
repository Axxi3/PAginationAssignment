import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import productList from './Array'
import Card from './assets/Component/Card'



function App() {
  const [none, setnone] = useState("none") 
  const [credentials,setcredentials]=useState({
    min:0 , 
    max:9999999, 
    
  })    
  const [filteredProductsInRange,setfilteredProductsInRange]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductsInRange.slice(indexOfFirstItem, indexOfLastItem);
  const changeValue=(event)=> { 
    setcredentials({...credentials,[event.target.name]:event.target.value})   
     console.log({...credentials,[event.target.name]:event.target.value})
    }    
    useEffect(() => {
      if (credentials.max === "" || credentials.min === "") {
          setfilteredProductsInRange(productList);
      } else {
          const filteredProducts = productList.filter(product => product.price >= credentials.min && product.price <= credentials.max);
          setfilteredProductsInRange(filteredProducts);
      }
  }, [credentials, productList]);
  

  function passNone() {
    if(none=="none"){ 
      setnone("")
    } else { 
      setnone("none")
    }
  }
  return (
    <div>  
    <div className="top-sec">
    <h1 className="">Currently available items</h1>  
    <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover"
    onClick={passNone}>
    Filter Price
  </button>  
   <div className="input-group slider" style={{display:none}}>
 
  <input type="number" aria-label="First name" className="form-control" placeholder='Minimum Price' value={credentials.min} name='min'onChange={changeValue}/>
  <input type="number" aria-label="Last name" className="form-control" placeholder='Maximum Price' value={credentials.max} name='max' onChange={changeValue}/>
</div>
    </div>
   <div className="card-container">
    { currentItems.length!==0 ?
      currentItems.map((data)=>{   
        return(
        <Card img={data.img} title={data.title} Price={data.price} author={data.author}/>
      ) }) :null
    }
   </div>  
   <div className='pagi-button'>
                <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
    </div>
  )
}

export default App
