import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCards(data));

    }, [])


    return (
        <div>
            <h3 className="text-2xl font-bold">Cards File created: {cards.length}</h3>
            <div className="flex gap-6">
                <div className="grid grid-cols-3 gap-6">
                    {
                        cards.map((card, idx) => <Card key={idx} card={card} />)
                    }

                </div>
                <div>
                    <h3>Bookmarks</h3>
                </div>
            </div>
        </div>
    );
};

export default Cards;