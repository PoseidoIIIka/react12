import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './ResponsiveSlider.module.css';

function ResponsiveSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={s.mg50}>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className={s.slide}>
                        <img src="https://www.bmw.tm/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://motor.ru/imgs/2022/01/07/20/5154800/b0ce6840700b7ee93dc7e31f8602e27fb6b1946a.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://cdn.kodixauto.ru/media/image/5f92fff9c742e80001d7a1f9" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://arendacar.ru/wp-content/uploads/2021/10/3ff05de024ae49f7b8e296e506f8abda.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://kolesa-uploads.ru/-/c5702e32-e0b5-4036-9d18-a7b7c052ef1e/bmw-i7-front1-mini.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://autoreview.ru/images/Article/1747/Article_174737_860_575.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://3dnews.ru/assets/external/illustrations/2023/04/18/1085270/bmw-i7-m70-xdriv_01.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://s.auto.drom.ru/i24214/c/photos/fullsize/bmw/x2/bmw_x2_764839.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ResponsiveSlider;