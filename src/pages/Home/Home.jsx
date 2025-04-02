import React from "react";

// style
import "./HomeStyle.css"

function Home(){
    return (
        <main>
            <div className="main__container__aboutUS">
                <div className="main__container">
                    <div className="left__uncontainer">
                        <div className="up__left__text">
                            <p className="title__main">Про нас </p>
                            <p className="textIn__titele">Ми – ентузіасти, об'єднані спільною метою: зробити волонтерство простим і 
                                ефективним. Наша платформа – це місце, де зустрічаються ті, хто потребує допомоги, 
                                та ті, хто готовий її надати.
                            </p>
                        </div>
                        <div className="under__left__text">
                            <p className="title__main">Наша місія</p>
                            <p className="textIn__titele">
                                Ми прагнемо створити спільноту, де кожен може зробити свій внесок у добру справу.
                                Ми віримо, що волонтерство – це не лише допомога іншим, але й можливість для особистого 
                                зростання, отримання нового досвіду та знайомства з однодумцями.
                            </p>
                        </div>
                        
                    </div>
        
                    <div className="right__container">
                        <img src="img/about__us.png" alt="" />
                    </div>
                </div>
                <div className="inf__container">
                    <div className="inf__left__container">
                        <p className="title__inf">Як доєднатись ?</p>
                        <p className="text__inf">Щоб долучитися до волонтерства, просто перейдіть на вкладку «Ініціативи», оберіть проєкт, який вас зацікавив, 
                            та натисніть кнопку «Відгукнутися». Після цього організатори проєкту зв'яжуться з вами для уточнення деталей 
                            вашої участі.
                        </p>
                    </div>
                    <div className="inf__right__container">
                        <a className="link__btn" href="#">
                            <button className="btn__Inf " id="inf__btn__1">Задонатити!</button>
                        </a>
                        <a href="/initiatives/initiatives.html"><button className="btn__Inf active" id="inf__btn__2">Доєднатись!</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;