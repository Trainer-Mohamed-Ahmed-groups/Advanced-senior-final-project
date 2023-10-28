import { useTranslation } from "react-i18next"
import ProductCard from "../shared/ProductCard"

export default function Offers({ offersData }) {
    let { t } = useTranslation()
    return (
        <div className="tw-bg-gray-400 tw-py-4">
            <h2 className="tw-text-center tw-my-6">{t('offers')}</h2>
            <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-4 tw-container tw-mx-auto">
                {
                    offersData.map(product =>
                        <ProductCard product={product} key={product.item_id} />
                    )
                }
            </div>
        </div>
    )
}
