import { Carousel } from 'react-bootstrap';

export default function ProductsCarousel({ sliderData, i18n }) {
    return (
        <Carousel>
            {
                sliderData.map((slide, index) =>
                    <Carousel.Item key={index}>
                        <img className="tw-w-full" src={slide.image} alt={slide.en_title} />
                        <Carousel.Caption>
                            <h3>{i18n.language === "en" ? slide.en_title : slide.ar_title}</h3>
                            <p>{i18n.language === "en" ? slide.en_text : slide.ar_text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}
