import React from "react";

// css
import "./MyInitiativeStyle.css"
function MyInitiative(){
return (
    <main>
        <div className="main__container__about-us">
            <div className="left__part__about-us">
                <p className="title__myHistory">Моя історія</p>
                <div className="container__myHistory">
                    {/* item */}
                </div>
            </div>

            <div className="right__part__about-us">
                <p className="title__honors">
                    Відзнаки
                </p>

                <div className="container__honors">

                    <div className="items__honors">
                        <img src="/img/medal__1.png" alt="" />
                        <p className="honors__text">За невтомну підтримку та безкорисливу допомогу</p>
                    </div>

                    <div className="items__honors">
                        <img src="/img/medal__2.png" alt="" />
                        <p className="honors__text">За відданість справі та вірність волонтерському обов'язку</p>
                    </div>

                    <div className="items__honors">
                        <img src="/img/medal__3.png" alt="" />
                        <p className="honors__text">За врятовані життя та надану допомогу в складних умовах</p>
                    </div>

                    <div className="items__honors">
                        <img src="/img/medal__4.png" alt="" />
                        <p className="honors__text">За організацію гуманітарної допомоги та підтримку потребуючих</p>
                    </div>

                    <div className="items__honors">
                        <img src="/img/medal__5.png" alt="" />
                        <p className="honors__text">За мужність і самовідданість під час виконання волонтерських завдань</p>
                    </div>

                    <div className="items__honors">
                        <img src="/img/medal__6.png" alt="" />
                        <p className="honors__text">За вагомий внесок у зміцнення громади та розвиток волонтерського руху</p>
                    </div>

                    <div className="items__honors">
                        <img src="/img/medal__7.png" alt="" />
                        <p className="honors__text">За активну участь у благодійних акціях</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
)
}
export default  MyInitiative;