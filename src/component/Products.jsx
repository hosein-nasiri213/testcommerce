import React, {useState , useEffect} from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true ;

    useEffect(() => {
        getProducts();
    }, [input])
    


  return (
    <div>Products</div>
  )
}

export default Products