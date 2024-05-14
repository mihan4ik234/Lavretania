import { useState } from 'react'
import './form.css'
import Background from './assets/Background1.png'

function Form() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='booking'>
                <div className='bookingContent'>
                    <div className='leftBlock'>
                        <p id='bookingText'>Хотите забронировать<br />праздник?</p>
                        <p id='contactText'>Оставьте ваши контактные данные и<br />мы свяжемся с вами в ближайшее<br />время!</p>
                    </div>
                    <div className='rightBlock'>
                        <form>
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Имя" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phone" name="phone" placeholder="Телефон" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <input type="date" id="date" name="date" placeholder="Дата праздника" required />
                            </div>
                            <div className="form-group">
                                <textarea id="wishes" name="wishes" placeholder="Пожелания (макс. 120 символов)" maxLength="120"></textarea>
                            </div>
                            <p>Нажимая кнопку "Оставить заявку", вы соглашаетесь на обработку<br />персональных данных</p>
                            <button type="submit">Оставить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
