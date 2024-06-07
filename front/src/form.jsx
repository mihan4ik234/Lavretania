import { useState } from 'react';
import './form.css';
import Background from './assets/Background1.png';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        wishes: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div className='booking'>
                <div className='bookingContent'>
                    <div className='leftBlock'>
                        <p id='bookingText'>Хотите забронировать<br />праздник?</p>
                        <p id='contactText'>Оставьте ваши контактные данные и<br />мы свяжемся с вами в ближайшее<br />время!</p>
                    </div>
                    <div className='rightBlock'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="email" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="date" id="date" name="date" placeholder="Дата праздника" value={formData.date} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <textarea id="wishes" name="wishes" placeholder="Пожелания (макс. 120 символов)" maxLength="120" value={formData.wishes} onChange={handleChange}></textarea>
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

export default Form;
