import React, { useState } from "react";
import SuccessCard from "../components/SuccessCard.jsx";

import person1 from '../images/person1.webp';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';
import person4 from '../images/person4.webp';
import person5 from '../images/person5.webp';


const successData = [
    { id: 1, name: "Micheal", quote: "Thanks to this program," +
            " I’ve gained the confidence and skills I need to advance in my career. " +
            "The trainers were so supportive and knowledgeable", image: person1 },

    { id: 2, name: "Bob",  quote: "Thanks to this program," +
            " I’ve gained the confidence and skills I need to advance in my career. " +
            "The trainers were so supportive and knowledgeable", image: person2 },

    { id: 3, name: "Clara",  quote: "Thanks to this program," +
            " I’ve gained the confidence and skills I need to advance in my career. " +
            "The trainers were so supportive and knowledgeable", image: person3 },

    { id: 4, name: "Sierra",  quote: "Thanks to this program," +
            " I’ve gained the confidence and skills I need to advance in my career. " +
            "The trainers were so supportive and knowledgeable", image: person4 },

    { id: 5, name: "Alisa",  quote: "Thanks to this program," +
            " I’ve gained the confidence and skills I need to advance in my career. " +
            "The trainers were so supportive and knowledgeable", image: person5 }

];

const SuccessCardsSection = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="success-cards-container">
            {successData.map((card) => (
                <SuccessCard
                    key={card.id}
                    quote={card.quote}
                    name={card.name}
                    image={card.image}
                    isSelected={selectedId === card.id}
                    onSelect={() => setSelectedId(card.id)}
                />
            ))}
        </div>
    );
};

export default SuccessCardsSection;