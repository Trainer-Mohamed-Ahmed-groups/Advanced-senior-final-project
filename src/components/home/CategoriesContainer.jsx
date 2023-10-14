import { Card } from 'react-bootstrap';
export default function CategoriesContainer({ categoriesData, i18n }) {
    return (
        <div className='tw-container tw-m-auto tw-grid lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-7 tw-my-9'>
            {
                categoriesData.map(category =>
                    <Card className='tw-flex tw-flex-row tw-p-2' key={category.item_id}>
                        <img src={category.images} alt="" />
                        <Card.Body>
                            <Card.Title>{i18n.language === "en" ? category.en_name : category.ar_name}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}
