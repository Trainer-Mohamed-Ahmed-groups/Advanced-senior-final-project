import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import ProductCard from "../components/shared/ProductCard";
import { Spinner } from 'react-bootstrap';
import { SearchContext } from "../context/SearchContext";

export default function Products() {
    const [homePageData, setHomePageData] = useState([])
    const search = useContext(SearchContext)
    const { i18n } = useTranslation()

    console.log(search.search)

    let getData = () => {
        fetch("http://react-ecommerce.activegroup-eg.com/api/home")
            .then(data => data.json())
            .then(res => setHomePageData(res.data))
    }

    useEffect(() => {
        getData()
    }, [])
    let { t } = useTranslation()
    return (
        <>
            {
                Object.keys(homePageData).length > 0
                    ?
                    <div className="tw-bg-gray-400 tw-py-4">
                        <h2 className="tw-text-center tw-my-6">{t('products')}</h2>
                        <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-4 tw-container tw-mx-auto">
                            {
                                i18n.language === 'en' ?
                                    homePageData.products.filter(product =>
                                        search.search.toLowerCase() === ""
                                            ? product
                                            : product.en_name.toLowerCase().includes(search.search)
                                    ).map(product =>
                                        <ProductCard product={product} key={product.item_id} />
                                    )
                                    : homePageData.products.filter(product =>
                                        search.search === ""
                                            ? product
                                            : product.ar_name.includes(search.search)
                                    ).map(product =>
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
