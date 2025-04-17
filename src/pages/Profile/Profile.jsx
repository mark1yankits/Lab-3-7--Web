import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc,getFirestore } from "firebase/firestore";
import { app } from "../../firebase";

// css
import "./ProfileStyle.css"
function Profile(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [contactMethod, setContactMethod] = useState("phone");

    const db = getFirestore(app); 

    const auth = getAuth();
    const user = auth.currentUser;
    // load with FireBAse
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "User", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setName(data.name || "");
                    setSurname(data.surname || "");
                    setPhone(data.phoneNumber || "");
                    setContactMethod(data.contactMethod || "");
                }
            }
        });
    
        return () => unsubscribe();
    }, []);

    // sent form in FireBase

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user) {
                const docRef = doc(db, "User", user.uid);
                await updateDoc(docRef, {
                    name,
                    surname,
                    phoneNumber,
                    contactMethod,
                });
                alert("Дані оновлено!");
            }
        } catch (error) {
            console.error("Помилка при оновленні даних:", error.message, error.code);
            alert("Сталася помилка при оновленні даних.");
        }
    };
    

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
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Ім'я:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ім’я" required />
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="surname">Прізвище:</label>
                        <input type="text" id="surname" name="surname" value={surname} onChange={(e)=>setSurname(e.target.value)} placeholder="Прізвище" required />
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="phone">Номер телефону:</label>
                        <input type="tel" id="phone" name="phone" value={phoneNumber} onChange={(e)=>setPhone(e.target.value)} placeholder="номер телефону" required />
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="contact-method">Бажаний спосіб контакту:</label>
                        <select id="contact-method" value={contactMethod} onChange={(e)=>setContactMethod(e.target.value)} name="contact-method" required>
                            <option value="phone">Телефонний дзвінок</option>
                            <option value="email">Email</option>
                            <option value="messenger">Месенджер (Viber, Telegram)</option>
                        </select>
                    </div>
                    <button className="btn__submit" type="submit">Надіслати</button>
                </form>
                
            </div>
            
        </div>
    </main>

    )
}

export default Profile;