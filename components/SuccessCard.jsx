import React from 'react';
import {useState} from 'react';
import '../style sheets/SuccessCard.css';
import quoteMark from '../images/quote-mark.png'

const SuccessCard = ({quote, name, image, isSelected, onSelect}) => {

    return (

        <div
            className={`success-card ${isSelected ? "selected" : "dimmed"}`}
            onClick={onSelect}
        >
            <img className="quote-mark" src={quoteMark} alt=""/>
            <p className="quote-text">{quote}</p>
            <div className="person-info">
                <img src={image} alt={name} className="person-img" />
                <p className="person-name">{name}</p>
            </div>
        </div>
    );
};

export default SuccessCard;