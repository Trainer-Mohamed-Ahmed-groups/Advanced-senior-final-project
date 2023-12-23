import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductsCarousel from "../components/home/ProductsCarousel";
import { Spinner } from 'react-bootstrap';
import CategoriesContainer from "../components/home/CategoriesContainer";
import Offers from "../components/home/Offers";

export default function Home() {


    const [homePageData, setHomePageData] = useState([])

    let getData = () => {
        fetch("http://react-ecommerce.activegroup-eg.com/api/home")
            .then(data => data.json())
            .then(res => setHomePageData(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

    const { i18n } = useTranslation()
    return (
        <>
            {
                Object.keys(homePageData).length > 0
                    ?
                    <>
                        <ProductsCarousel sliderData={homePageData.home_slider} i18n={i18n} />
                        <CategoriesContainer categoriesData={homePageData.categories} i18n={i18n} />
                        <Offers offersData={homePageData.offers}/>
                    </>
                    :
                    <div className="tw-min-h-screen tw-flex tw-justify-center tw-items-center">
                        <Spinner animation="grow" />
                    </div>
            }
        </>
    )
}
