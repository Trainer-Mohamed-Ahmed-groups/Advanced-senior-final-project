import { Carousel, ButtonGroup, ToggleButton, Dropdown } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spinner } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ProductDetails() {

    const [productData, setProductData] = useState([])
    const [radioValue, setRadioValue] = useState('1');
    let params = useParams()
    let { t, i18n } = useTranslation();


    let getData = () => {
        fetch("http://react-ecommerce.activegroup-eg.com/api/show-product/" + params.id)
            .then(json => json.json())
            .then(res => setProductData(res.data))
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {
                Object.keys(productData).length > 0
                    ?
                    <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-1 tw-gap-10 tw-p-10">
                        <div className="tw-col-span-1">
                            <Carousel indicators={false} controls={false}>
                                {productData.images.map((image, index) =>
                                    <Carousel.Item key={index}>
                                        <img text="First slide" className='tw-w-full tw-max-h-[50vh]' src={image} alt={productData.en_name} />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                            <div className="tw-flex">
                                {
                                    productData.images.map(image =>
                                        <img src={image} alt='test' className='tw-w-1/4 tw-m-2' />
                                    )
                                }
                            </div>
                        </div>
                        <div className="tw-col-span-2">
                            <div className="tw-my-4">
                                <Link className="tw-mx-1" to="/">{t('home')}</Link> /
                                <Link className="tw-mx-1" to="/products">{t('products')}</Link> /
                                <span className='tw-mx-1'>{i18n.language === "en" ? productData.en_name : productData.ar_name}</span>
                            </div>
                            <div>{
                                [[...Array(5)].map((star, index) =>
                                    Math.round(productData.rate) > index
                                        ? <FontAwesomeIcon icon={faStar} className='tw-text-gold' />
                                        : <FontAwesomeIcon icon={faStar} />
                                )]}
                            </div>
                            <p>{i18n.language === "en" ? productData.en_description : productData.ar_description}</p>
                            <div className="tw-grid tw-grid-cols-2">
                                <div className="tw-col-span-1">{t('color')}</div>
                                <div className="tw-col-span-1">
                                    <ButtonGroup>
                                        {
                                            productData.color.map(colorCode =>
                                                <ToggleButton
                                                    key={colorCode.color_id}
                                                    id={colorCode.color_id}
                                                    type="radio"
                                                    name="radio"
                                                    style={{ backgroundColor: colorCode.color_id }}
                                                    value={colorCode.color_id}
                                                    checked={radioValue === colorCode.color_id}
                                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                    className="tw-p-4 tw-m-3 tw-h-4 tw-w-4 tw-rounded-full tw-border-0"
                                                >
                                                </ToggleButton>
                                            )
                                        }
                                    </ButtonGroup>
                                </div>
                                <div className="tw-col-span-1">{t('sizes')}</div>
                                <div className="tw-col-span-1">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                            {t('sizes')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {
                                                productData.sizes.map(size =>
                                                    <Dropdown.Item>{i18n.language === "en" ? size.en_name : size.ar_name}</Dropdown.Item>
                                                )
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="tw-col-span-1">{t('quantity')}</div>
                            </div>
                        </div>
                    </div >
                    : <div className="tw-min-h-screen tw-flex tw-justify-center tw-items-center">
                        <Spinner animation="grow" />
                    </div>
            }
        </>
    )
}
