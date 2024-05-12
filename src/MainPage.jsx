// MainPage.jsx
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainPage.css';
import firstphoto from './assets/main.png';
import slide1 from './assets/image2.png';
import slide2 from './assets/image3.png';
import slide3 from './assets/image4.png';

function MainPage() {
    const [count, setCount] = useState(0);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Количество отображаемых слайдов (изменено на 3)
        slidesToScroll: 1
    };

    return (
        <>
            <div className='Gamecentr'>
                <div className='block1'>
                    <p id='gamecenter'>Игровой центр<br />развлечений</p>
                    <p id='opisgamecenter'>На одном пространстве собраны активные <br /> игры, интеллектуальные квесты и залы для<br />мероприятий.<br />Организуйте идеальный праздник!</p>
                    <div className='bt'>
                        <p id='yellowbt'>Заказать праздник</p>
                    </div>
                </div>
                <div className='block2'>
                    <img id='firstphoto' src={firstphoto} />
                </div>
            </div>
            <div className='entertainment'>
                <div className='Slider'>
                <Slider {...sliderSettings}>
                    <div>
                        <img id='slide' src={slide1} alt="фото1"/>
                    </div>
                    <div>
                        <img id='slide' src={slide2} alt="фото2"/>
                    </div>
                    <div>
                        <img id='slide' src={slide3} alt="фото3"/>
                    </div>
                </Slider>
                </div>
            </div>
        </>
    )
}

export default MainPage;
