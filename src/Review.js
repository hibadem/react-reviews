import React, {useState} from "react";
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;    
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const prevPerson = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const nextPerson = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson = () => {
        let randomNumber =  Math.floor(Math.random() * people.length);

        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    const {name, job, image, text} = people[index];
    return (
        <article className="review">
            <div className="review__image-container">
                <img src={image} alt={name} className="review__image"/>
                <span className="review__quote">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="review__author">{name}</h4>
            <p className="review__job">{job}</p>
            <p className="review__info">{text}</p>
            <div className="button-container">
                <div className="arrow-buttons">
                <button className="prev-button" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-button" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
                </div>
                <button className="random-button" onClick={randomPerson}>
                    Suprise Me
                </button>
            </div>
            
        </article>
    )
}

export default Review;