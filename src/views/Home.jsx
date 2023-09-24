import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Home() {

    const [categories, setCategories] = useState([]);

    let getCategories = () => {
        fetch("https://dummyjson.com/products/categories")
            .then(json => json.json())
            .then(res => setCategories(res))
    }

    useEffect(() => {
        getCategories()
    }, [])

    const { t } = useTranslation()
    return (
        <div>
            <h1 className="text-center">{t('home')}</h1>
            <ul>
                {
                    categories.length > 0
                        ?
                        categories.map((category, index) =>
                            <li key={index}>
                                <Link to={`/category/${category}`}>{category}</Link>
                            </li>
                        )
                        :
                        <div className="lds-dual-ring"></div>
                }
            </ul>
        </div>
    )
}
