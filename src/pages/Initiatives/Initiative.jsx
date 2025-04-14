import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InitiativesStyle.css";

const Initiative = () => {
    const [initiatives, setInitiatives] = useState([]);
    const [filteredInitiatives, setFilteredInitiatives] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedType, setSelectedType] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let storedInitiatives = JSON.parse(localStorage.getItem("initiatives")) || [
            { id: 1, title: "Прибирання парку", description: "Запрошуємо всіх охочих долучитися до весняного прибирання парку!", volunteersNeeded: 3, date: "2025-04-10", img: "/img/Rectangle_3.png", isActive: true, location: "Львів" ,type: "ecogology"},
            { id: 2, title: "Допомога в притулку для тварин", description: "Приходьте погодувати та вигуляти тварин у притулку.", volunteersNeeded: 5, date: "2025-05-17", img: "/img/Rectangle_3.png", isActive: true, location: "Рівне" ,type: "animalSupport"},
            { id: 3, title: "Збір одягу для малозабезпечених", description: "Допоможіть зібрати теплий одяг для людей, які цього потребують.", volunteersNeeded: 7, date: "2025-03-20", img: "/img/Rectangle_3.png", isActive: true, location: "Київ" ,type: "socialSupport"},
            { id: 4, title: "Екологічний майстер-клас для дітей", description: "Організовуємо цікаві заняття для дітей про сортування сміття та збереження природи.", volunteersNeeded: 4, date: "2025-06-25", img: "/img/Rectangle__2.png", isActive: true, location: "Київ" ,type: "ecogology"},
            { id: 5, title: "Фандрайзинг для лікарень", description: "Ми збираємо кошти та необхідні засоби для місцевих лікарень.", volunteersNeeded: 6, date: "2026-07-30", img: "/img/hospital_fr.jpg", isActive: true, location: "Харків" ,type: "socialSupport"},
            { id: 6, title: "Висадка дерев у місті", description: "Зробимо місто зеленішим! Приєднуйтесь до акції з висадки молодих дерев.", volunteersNeeded: 10, date: "2025-04-05", img: "/img/Rectangle__1.png", isActive: true, location: "Рівне" ,type: "ecogology"},
            { id: 7, title: "Ремонт дитячого майданчика", description: "Потрібна допомога у ремонті гойдалок, фарбуванні та оновленні дитячого майданчика.", volunteersNeeded: 8, date: "2025-04-10", img: "/img/Rectangle__1.png", isActive: true, location: "Рівне" ,type: "socialSupport"},
            { id: 8, title: "Благодійний ярмарок", description: "Організовуємо благодійний ярмарок, щоб зібрати кошти на потреби дітей-сиріт.", volunteersNeeded: 5, date: "2025-04-15", img: "/img/Rectangle_3.png", isActive: true, location: "Рівне" ,type: "socialSupport"}
        ];

        const today = new Date().toISOString().split("T")[0];
        const activeInitiatives = storedInitiatives.filter(item => item.date >= today);
        localStorage.setItem("initiatives", JSON.stringify(activeInitiatives));
        setInitiatives(activeInitiatives);
        setFilteredInitiatives(activeInitiatives);
    }, []);

    const handleDetailClick = (id) => {
        navigate(`/initiative/${id}`);
    };

    const handleLocationChange = (e) => {
        const { value, checked } = e.target;
        setSelectedLocations((prevLocations) => {
            const updatedLocations = checked
                ? [...prevLocations, value]
                : prevLocations.filter(location => location !== value);
            filterInitiatives(updatedLocations, selectedDates, selectedType);
            return updatedLocations;
        });
    };
    const handleTypeChange = (t)=>{
        const {value, checked} = t.target // target  Властивість target використовується в об'єкті події (event) і містить посилання на елемент, який викликав подію.
        setSelectedType((prevType)=>{
            const updatedType = checked
                ? [...prevType, value]
                : prevType.filter(type=> type !== value);
            filterInitiatives(selectedLocations, selectedDates, updatedType);

            return updatedType;
        });
    }

    const handleDateChange = (e) => {
        const { value, checked } = e.target;
        setSelectedDates((prevDates) => {
            const updatedDates = checked
                ? [...prevDates, value]
                : prevDates.filter(date => date !== value);
            filterInitiatives(selectedLocations, updatedDates, selectedType);
            return updatedDates;
        });
    };

    const filterInitiatives = (locations, dates, types) => {
        let filtered = [...initiatives];
    
        if (locations.length > 0) {
            filtered = filtered.filter(item => locations.includes(item.location));
        }
    
        if (dates.length > 0) {
            const today = new Date().toISOString().split("T")[0];
            const currentWeek = getCurrentWeekRange(today);
            const currentMonth = getCurrentMonthRange(today);
    
            filtered = filtered.filter(item => {
                if (dates.includes('today') && item.date === today) return true;
                if (dates.includes('week') && item.date >= currentWeek.start && item.date <= currentWeek.end) return true;
                if (dates.includes('month') && item.date >= currentMonth.start && item.date <= currentMonth.end) return true;
                return false;
            });
        }
    
        if (types.length > 0) {
            filtered = filtered.filter(item => types.includes(item.type));
        }
    
        setFilteredInitiatives(filtered);
        
    };
    

    const getCurrentWeekRange = (today) => {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        const endOfWeek = new Date(today);
        endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));

        return { start: startOfWeek.toISOString().split('T')[0], end: endOfWeek.toISOString().split('T')[0] };
    };

    const getCurrentMonthRange = (today) => {
        const startOfMonth = new Date(today);
        startOfMonth.setDate(1);
        const endOfMonth = new Date(today);
        endOfMonth.setMonth(endOfMonth.getMonth() + 1);
        endOfMonth.setDate(0);

        return { start: startOfMonth.toISOString().split('T')[0], end: endOfMonth.toISOString().split('T')[0] };
    };
    

    const resetFilter =()=>{
        setSelectedDates([]);
        setSelectedType([]);
        setSelectedLocations([]);
        setFilteredInitiatives(initiatives);
    }
    return (
        <main>
            <div className="filter__sort">
                <button className="filter">Filter</button>
                <div className="sort__containerMEdia">
                    <label htmlFor="sort">Сортувати за:</label>
                    <select id="sort">
                        <option value="date">Датою</option>
                        <option value="location">Локацією</option>
                        <option value="popularity">Популярністю</option>
                    </select>
                </div>
            </div>
            <div className="main__container">
                <div className="left__part__filter-container">
                    <div className="container__location__filter">
                        <p className="text__filter">Локація </p>
                        <label>
                            <input onChange={handleLocationChange} type="checkbox" className="checkbox" checked={selectedLocations.includes("Львів")} value="Львів" />
                            Львів
                        </label>
                        <label>
                            <input onChange={handleLocationChange} type="checkbox" className="checkbox" checked={selectedLocations.includes("Рівне")} value="Рівне" />
                            Рівне
                        </label>
                        <label>
                            <input onChange={handleLocationChange} type="checkbox" className="checkbox" checked={selectedLocations.includes("Київ")} value="Київ" />
                            Київ
                        </label>
                    </div>

                    <hr className="item__hr" />
                    <div className="container__date__filter">
                        <p className="text__filter">Дата </p>
                        <label>
                            <input onChange={handleDateChange} type="checkbox" className="checkbox active" checked={selectedDates.includes("today")} value="today" />
                            Сьогодні
                        </label>
                        <label>
                            <input onChange={handleDateChange} type="checkbox" className="checkbox" checked={selectedDates.includes("week")} value="week" />
                            Цього тижня
                        </label>
                        <label>
                            <input onChange={handleDateChange} type="checkbox" className="checkbox" checked={selectedDates.includes("month")} value="month" />
                            Цього місяця
                        </label>
                    </div>
                    {/* 3  */}
                    <hr className="item__hr" />
                    <div className="container__date__filter">
                        <p className="text__filter">Тип</p>
                        <label>
                            <input onChange={handleTypeChange} type="checkbox" className="checkbox active" checked={selectedType.includes("ecogology")}  value="ecogology" />
                            Екологія 
                        </label>
                        <label>
                            <input onChange={handleTypeChange} type="checkbox" className="checkbox" checked={selectedType.includes("animalSupport")}  value="animalSupport" />
                            Допомога тваринам
                        </label>
                        <label>
                            <input onChange={handleTypeChange} type="checkbox" className="checkbox" checked={selectedType.includes("socialSupport")} value="socialSupport" />
                            соціальна підтримка 
                        </label>
                    </div>
                    <hr className="item__hr" />
                    <div className="skills__container">
                        <button onClick={resetFilter}  className="resetFilter"> Скинути фільтр</button> 
                    </div>
                </div>
                <div className="item__intiatives__container">
                    {filteredInitiatives.map((initiative) => (
                        <div key={initiative.id} className="container__item" onClick={() => handleDetailClick(initiative.id)}>
                            <div className="img__item">
                                <img src={initiative.img || `${initiative.img}`} alt="Ініціатива" />
                            </div>
                            <div className="inf__item">
                                <div className="text__item__container">
                                    <p className="text__item">{initiative.title}</p>
                                    <span className="date__element">{initiative.date}</span>
                                </div>
                                <div className="navigation">
                                    <img src="/icon/navigation__icon.png" alt="Іконка навігації" />
                                    <p>{initiative.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Initiative;
