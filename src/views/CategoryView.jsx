import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CategoryView() {
    const params = useParams();

    const [products, setProducts] = useState([])


    let getCategoryProducts = () => {
        fetch('https://dummyjson.com/products/category/' + params.category)
            .then(json => json.json())
            .then(res => setProducts(res.products))
    }

    useEffect(() => {
        getCategoryProducts()
    })
    return (
        <div>
            <h2>{params.category}</h2>
            {
                products.length > 0
                    ?
                    products.map(product =>
                        <div key={product.id}>
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                        </div>
                    ) : "Loading"
            }
        </div>
    )
}
