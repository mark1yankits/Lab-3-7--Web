
import "./FooterStyle.css";

function Footer(){

    return (
        <footer>
            <hr className="hr__footer" />
            <div className="footer__container">
                <div className="footer__icon-container">
                    <p className="icon__text">
                        Разом для змін
                        <img src="icon/heart.png" alt="Серце" />
                    </p>
                    <p className="TextProcessor">БО «Разом для змін» © 2025. Всі права захищено.</p>
                </div>
                <div className="footer__inf">
                    <p className="title__footer__Inf">Підтримайте нашу місію!</p>
                    <p className="text__footer__Inf">
                        Ваш внесок – це можливість зробити добру справу та допомогти тим, хто цього потребує. Кожна гривня має значення! 
                        <br /><br />
                        Проскануйте 
                        QR-код праворуч, щоб зробити безпечний та швидкий донат. Ваша підтримка – це надія та допомога для багатьох людей.
                    </p>
                </div>
                <div className="qr__code__container">
                    <img src="/img/Vector.png" alt="QR-код для донату" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;