//Footer.jsx
import { useState } from 'react'
import './Footer.css'
import Phone from './assets/phone.png'
import Adress from './assets/adress.png'
import Time from './assets/time.png'
import Logo from './assets/image1.png'
import Vk from './assets/vk.png'

function Footer() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="footerContent">
                <div className='ALLcontent'>
                    <p className="locationTitle">Как нас найти?</p>
                    <div className="contactInfo">
                        <div className="contactItem"><img src={Phone} alt="/" /> +7 (3532) 66-34-99</div>
                        <div className="contactItem"> <img src={Adress} alt="/" /> г. Оренбург, Пр. Победы, 1А</div>
                        <div className="contactItem"><img src={Time} alt="/  " /> Время работы игрового центра:</div>
                        <div className="workingHours">
                            <p>ПН-ЧТ 10:00-21:00</p>
                            <p>ПТ 10:00-22:00</p>
                            <p>СБ-ВС 09:00-22:00</p>
                            <p>Звонки принимаются до 20:45. После 20:30 - все игры проводятся только по предварительной записи в рабочее время центра, при подтверждении брони.</p>
                        </div>
                    </div>
                    <button className="directionsButton">Как добраться</button>
                </div>

                {/* Блок с колонками */}
                <img id='logo' src={Logo} alt="Логотип" />
                <div className="footerColumns">
                    
                    <div className="column">
                        <p className="columnTitle">Клиентам</p>
                        <p>Главная</p>
                        <p>Скидки и акции</p>
                        <p>Подарочный сертификат</p>
                    </div>
                    <div className="column">
                        <p className="columnTitle">Услуги</p>
                        <p>Все развлечения</p>
                        <p>Детские праздники</p>
                        <p>Выпускные</p>
                    </div>
                    <div className="column">
                        <p className="columnTitle">О центре</p>
                        <p>Контактная информация</p>
                        <p>Фотогалерея</p>
                        <p>Юридическая информация</p>
                    </div>
                </div>

                {/* Мы в социальных сетях */}
                <div className="socialNetworks">
                    <p>Мы в социальных сетях</p>
                    <img src={Vk} alt="Вконтакте" />
                </div>

                {/* Политика защиты персональных данных и Пользовательское соглашение */}
                <div className="legalInfo">
                    <p>Политика защиты персональных данных</p>
                    <p>Пользовательское соглашение</p>
                </div>

                {/* ©2024 Лавретания */}
                <p className="copyright">©2024 Лавретания</p>
            </div>
        </>
    )
}

export default Footer
