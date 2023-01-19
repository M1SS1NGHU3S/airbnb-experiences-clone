import Card from "./Card";
import cardsData from "../data.js";

function Experiences() {
    const cards = cardsData.map((value) => {
        return (
            <Card 
                img={value.img} 
                rating={value.rating} 
                quantity={value.quantity} 
                country={value.quantity} 
                description={value.title} 
                price={value.price} 
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