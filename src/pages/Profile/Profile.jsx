import React from "react";

// css
import "./ProfileStyle.css"
function Profile(){
    return (
        <main>
        <div className="main__container__profile">
            <div className="avatarLogo__text">
                <div className="photo__container__main">
                    <div className="container__avatarLogo"></div>
                    <img  className="avatar__profile" src="/icon/avatar.png" alt="" />
                    <button className="shape__container">
                        <img className="shape__imgProfile" src="/icon/Shape.png" alt="" />
                    </button>
            </div>
            <div className="text__avatar">
                <p>Допустимі формати: jpg, png <br />Максимальна вага файлу: 1 мб</p>
            </div>
            </div>
            <div className="form__profile">
                <form className="contact-form">
                    <div className="form-group">
                        <label for="name">Ім'я:</label>
                        <input type="text" id="name" name="name" placeholder="Ім'я" required />
                    </div>
            
                    <div className="form-group">
                        <label for="surname">Прізвище:</label>
                        <input type="text" id="surname" name="surname" placeholder="Прізвище" required />
                    </div>
            
                    <div className="form-group">
                        <label for="phone">Номер телефону:</label>
                        <input type="tel" id="phone" name="phone" placeholder="номер телефону" required />
                    </div>
            
                    <div className="form-group">
                        <label for="contact-method">Бажаний спосіб контакту:</label>
                        <select id="contact-method" name="contact-method" required>
                            <option value="phone">Телефонний дзвінок</option>
                            <option value="email">Email</option>
                            <option value="messenger">Месенджер (Viber, Telegram)</option>
                        </select>
                    </div>
        
                </form>
                <button className="btn__submit" type="submit">Надіслати</button>
            </div>
            
        </div>
    </main>

    )
}

export default Profile;