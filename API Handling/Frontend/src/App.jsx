import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error,setError]=useState(true)
  const [loading,setLoading]=useState(false)

useEffect(()=>{
  (async()=>{
      try {
        setLoading(true)
        setError(false)
        const response=await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data.products || []);  // Ensure it’s always an array

        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
},[]
)

if (error){
  return<h1>Somethhing Wrong</h1>
}

if(loading){
  return <h1>loading ...</h1>
}

  return (
    <>
     <h2>Number of Products are :{products.length}</h2>
    </>
  )
}

export default App
