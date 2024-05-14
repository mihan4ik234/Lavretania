import React from 'react';
import { NavLink } from 'react-router-dom'; // Добавлен импорт NavLink
import './Header.css';
import logo from './assets/image1.png';
import phone from './assets/phone.png';
import vk from './assets/vk.png';
import adress from './assets/adress.png';

function Header() {
    return (
        <>
            <div className='orangeblock'>
                <div className='header'>
                    <NavLink to="/">
                        <img id='logo' src={logo} alt="Logo" />
                    </NavLink>
                    <div className='city'>
                        <p>Оренбург</p>
                    </div>
                    <div className='Number'>
                        <p>+7 (3532) 66-34-99</p>
                        <div className='call'>
                            <img id='phone' src={phone} alt="Phone" />
                            <p> Обратный звонок</p>
                        </div>
                    </div>
                    <NavLink to="/map">
                        <p id='path'>Как добраться</p>
                    </NavLink>
                    <a href="https://vk.com"><img id='vk' src={vk} alt="VK" /></a>
                    <NavLink to="/map">
                        <img id='adress' src={adress} alt="Address" />
                    </NavLink>
                </div>
            </div>
            <div className='whiteblock'>
                <NavLink to="/allgames">Все<br /> развлечения</NavLink>
                <NavLink to="/allgames">Детские <br/> праздники</NavLink>
                <NavLink to="/gift">Подарочные <br/>карты</NavLink>
                <NavLink to="/gallery">Галерея</NavLink>
            </div>
        </>
    );
}

export default Header;
