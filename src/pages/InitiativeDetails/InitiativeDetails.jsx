import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./InitiativeDetailsStyle.css";

function InitiativeDetails() {
    const { id } = useParams(); 
    const [initiative, setInitiative] = useState(null);

    useEffect(() => {
        const storedInitiatives = JSON.parse(localStorage.getItem("initiatives") || "[]");
        const selectedInitiative = storedInitiatives.find(item => item.id === parseInt(id)); 
        setInitiative(selectedInitiative);
    }, [id]);

    if (!initiative) return <p>Завантаження...</p>; 

    return (
        <main>
            <div className="container__detailInit">
                <div className="left__part__detail">
                    <video controls id="myVideo">
                        <source src={`/video/videoplayback${id}.mp4`} type="video/mp4" />
                    </video>
                    <p className="dev__resources">Відео запрошення</p>
                </div>
                <div className="right__part__detail">
                    <p className="title__detail">{initiative.title}</p>
                    <p className="date__detail__text">{initiative.date}</p>
                    <p className="text__detail__text">{initiative.description}</p>
                    <p className="volunteers__needed">Потрібно волонтерів: <span className="volunteers-count">{initiative.volunteersNeeded}</span></p>
                    <button className="detail__btn">{initiative.volunteersNeeded > 0 ? 'Відгукнутись!' : 'Приєднались!'}</button>
                </div>
            </div>
        </main>
    );
}

export default InitiativeDetails;
