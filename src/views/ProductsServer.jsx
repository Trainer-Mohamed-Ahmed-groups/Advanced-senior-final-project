import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import ProductCard from "../components/shared/ProductCard";
import { Spinner } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

export default function ProductsServer() {
    const [products, setProducts] = useState([])

    let searchVal = useLocation()

    let getData = () => {
        fetch("http://react-ecommerce.activegroup-eg.com/api/home")
            .then(data => data.json())
            .then(res => setProducts(res.data.products))
    }
    let getSearchData = () => {
        fetch("http://react-ecommerce.activegroup-eg.com/api/search" + searchVal.search)
            .then(data => data.json())
            .then(res => setProducts(res.data))
    }
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        searchVal.search !== "" && getSearchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchVal.search])
    let { t } = useTranslation()
    return (
        <>
            {
                products.length > 0
                    ?
                    <div className="tw-bg-gray-400 tw-py-4">
                        <h2 className="tw-text-center tw-my-6">{t('products')}</h2>
                        <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-4 tw-container tw-mx-auto">
                            {
                                products.map(product =>
                                    <ProductCard product={product} key={product.item_id} />
                                )
                            }
                        </div>
                    </div>
                    :
                    <div className="tw-min-h-screen tw-flex tw-justify-center tw-items-center">
                        <Spinner animation="grow" />
                    </div>
            }
        </>
    )
}
