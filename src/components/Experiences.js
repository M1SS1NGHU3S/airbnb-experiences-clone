import Card from "./Card";
import cardsData from "../data.js";

function Experiences() {
    const cards = cardsData.map((value) => {
        return (
            <Card 
                key={value.id}
                item={value}
            />
        )
    });

    return (
        <div className="cards-list">
            {cards}
        </div>
    );
}

export default Experiences;