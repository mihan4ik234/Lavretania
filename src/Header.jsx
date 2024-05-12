// Header.jsx
import { useState } from 'react'
import './Header.css'
import logo from './assets/image1.png'
import phone from './assets/phone.png'
import vk from './assets/vk.png'
import adress from './assets/adress.png'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='orangeblock'>
                <div className='header'>
                    <img id='logo' src={logo} alt="Logo"></img>
                    <div className='city'>
                        <p>Оренбург</p>
                    </div>
                    <div className='Number'>
                        <p>+7 (3532) 66-34-99</p>
                        <div className='call'>
                            <img id='phone' src={phone} alt="Phone"></img>
                            <p> Обратный звонок</p>
                        </div>
                    </div>
                    <p id='path'>Как добраться</p>
                        <img id='vk' src={vk} alt="VK"/>
                        <img id='adress' src={adress} alt="Address"/>
                </div>
            </div>
            <div className='whiteblock'>
                <p>Все<br /> развлечения</p>
                <p>Детские <br/> праздники</p>
                <p>Выпускные</p>
                <p>Подарочные <br/>карты</p>
                <p>Галерея</p>
            </div>
        </>
    )
}

export default Header
