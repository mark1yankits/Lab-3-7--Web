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

    const sendItem = ()=>{
        const storedInitiatives = JSON.parse(localStorage.getItem("initiatives") || "[]");
        const initiativeIndex  = storedInitiatives.findIndex(item => item.id === initiative.id);
        if (initiativeIndex !== -1 && storedInitiatives[initiativeIndex].volunteersNeeded > 0) {
            storedInitiatives[initiativeIndex].volunteersNeeded -= 1;

            const updatedInitiatives = storedInitiatives.map((item, index) =>
                index === initiativeIndex
                    ? { ...item, volunteersNeeded: item.volunteersNeeded - 1 }
                    : item
            );
            localStorage.setItem("initiatives", JSON.stringify(updatedInitiatives));
            setInitiative(updatedInitiatives[initiativeIndex]);

            const selectedInitiative = {
                id: updatedInitiatives[initiativeIndex].id,
                title: updatedInitiatives[initiativeIndex].title,
                date: updatedInitiatives[initiativeIndex].date,
                description: updatedInitiatives[initiativeIndex].description,
                img: updatedInitiatives[initiativeIndex].img,
                volunteersNeeded: updatedInitiatives[initiativeIndex].volunteersNeeded
            }
            localStorage.setItem("selectedInitative", JSON.stringify(selectedInitiative));
            
            alert("Ви успішно приєдналися до ініціативи!");

        } 
        else{
            alert("Всі волонтери вже набрані для цієї ініціативи!");
        }
    }
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
                    <button onClick = {sendItem} className="detail__btn">{initiative.volunteersNeeded > 0 ? 'Відгукнутись!' : 'Приєднались!'}</button>
                </div>
            </div>
        </main>
    );
}

export default InitiativeDetails;
