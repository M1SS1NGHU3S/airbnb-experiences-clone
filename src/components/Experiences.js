import Card from "./Card";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";

function Experiences() {
    return (
        <div className="cards-list">
            <Card img={card1} rating="5.0" quantity="6" country="USA" description="Life lessons with Katie Zafares" price="136" />
			<Card img={card2} rating="5.0" quantity="30" country="USA" description="Learn wedding photography" price="125" />
			<Card img={card3} rating="4.8" quantity="2 " country="USA" description="Group Mountain Biking" price="50" />
        </div>
    );
}

export default Experiences;