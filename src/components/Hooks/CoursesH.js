import { useEffect, useState } from "react"

const useProducts =()=>{
    const [products, setProducts] =useState([]);

    useEffect(() =>{
        fetch('/courses.JSON')
        .then(res =>res.json())
        .then(data => setProducts(data))
    }, [])

    // retunr selected cart 
    return [products, setProducts];
}

export default useProducts;