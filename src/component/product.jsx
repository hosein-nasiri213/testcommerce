import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const product = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    }, [])
    
    const Loading = () => {
        return (
            <>
              Loading.....
            </>
        )

    }
    const showProduct = () => {
        return (
            <>
               
            </>
        )
    }

  return (
     <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <showProduct />}
            </div>
        </div>
    </div>
  )
}

export default product;