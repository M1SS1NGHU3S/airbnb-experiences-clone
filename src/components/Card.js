 import cardImg from "../img/card1.png";
 import star from "../img/star.png";

function Card() {
    return (
        <div className="experience-card ">
            <img className="card-img" src={cardImg} alt="example" />

            <div className="exp-description">
                <figure className="rating">
                    <img className="rating--star" src={star} alt="star rating" />
                    <figcaption className="rating--caption">5.0</figcaption>
                </figure>

                <p className="exp-info"><span className="exp-quantity">(6)</span> ● <span className="exp-location">USA</span></p>
            </div>
            <p className="exp-text">Life lessons with Katie Zaferes</p>
            <p className="exp-price"><span className="price--bold">From $136</span> / person</p>
        </div>
    )
}

 export default Card;