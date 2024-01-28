import React, { useEffect, useState } from "react";

const Seif = () => {

    const [cards, setCards] = useState([]);

    // Получение сохраненных карточек из localStorage при загрузке страницы
    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem('cards'));
        if (savedCards) {
            setCards(savedCards);
        }
    }, []);

    // Сохранение измененного состояния карточек в localStorage
    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    const handleCardClick = (index) => {
        // Изменение состояния карточки при клике
        const updatedCards = [...cards];
        updatedCards[index].selected = !updatedCards[index].selected;
        setCards(updatedCards);
    };

    return (
        <div>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`card ${card.selected ? 'selected' : ''}`}
                    onClick={() => handleCardClick(index)}
                >
                    {card.content}
                </div>
            ))}
        </div>
    );
};

export default Seif;

