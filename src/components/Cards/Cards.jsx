import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ handleAddToBookmark }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCards(data));

    }, [])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    cards.map((card, idx) => <Card
                        key={idx}
                        card={card}
                        handleAddToBookmark={handleAddToBookmark}

                    />)
                }


            </div>
        </div>
    );
};

Cards.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Cards;