import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { formatPath } from "../../helpers/formatPath"
export default function CategoriesContainer({ categoriesData, i18n }) {
    const { t } = useTranslation()
    return (
        <div>
            <h2 className="tw-text-center m-4">{t('categories')}</h2>
            <div className='tw-container tw-m-auto tw-grid lg:tw-grid-cols-3 sm:tw-grid-cols-1 tw-gap-7 tw-my-9'>
                {
                    categoriesData.map(category =>
                        <Link to={`/categories/${formatPath(category.en_name)}`} key={category.item_id}>
                            <Card className='tw-flex tw-flex-row tw-p-2 hover:tw-shadow-xl tw-transition-shadow' >
                                <img src={category.images} alt="" />
                                <Card.Body>
                                    <Card.Title>{i18n.language === "en" ? category.en_name : category.ar_name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
