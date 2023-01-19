 import star from "../img/star.png";

function Card(props) {
    return (
        <div className="experience-card ">
            <img className="card-img" src={props.img} alt="example" />

            <div className="exp-description">
                <figure className="rating">
                    <img className="rating--star" src={star} alt="star rating" />
                    <figcaption className="rating--caption">{props.rating}</figcaption>
                </figure>

                <p className="exp-info"><span className="exp-quantity">({props.quantity})</span> ● <span className="exp-location">{props.country}</span></p>
            </div>
            <p className="exp-text">{props.description}</p>
            <p className="exp-price"><span className="price--bold">From ${props.price}</span> / person</p>
        </div>
    )
}

 export default Card;