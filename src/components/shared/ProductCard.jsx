import { useTranslation } from "react-i18next"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
    let { i18n } = useTranslation()
    return (
        <Card style={{ width: '18rem ' }}>
            <Card.Img variant="top" src={product.images[0]} className="tw-max-h-80" />
            <Card.Body>
                <Card.Title>{i18n.language === 'en' ? product.en_name : product.ar_name}</Card.Title>
                <div>
                    {
                        [[...Array(5)].map((star, index) =>
                            Math.round(product.rate) > index
                                ? <FontAwesomeIcon key={index} icon={faStar} className="tw-text-gold" />
                                : <FontAwesomeIcon key={index} icon={faStar} />
                        )]}
                </div>
                <div className="tw-flex tw-justify-around">
                    <del className="price">{product.price}</del>
                    <span className="price">{product.price_after_discount}</span>
                </div>
                <Link to={`/products/${product.item_id}`} className="stretched-link"></Link>
            </Card.Body>
        </Card>
    )
}
