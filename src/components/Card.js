function Card(props) {
    let badgeText = props.openSpots === 0 ? "SOLD OUT" : props.location === "online" ? "ONLINE" : null;


    return (
        <div className="experience-card ">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img className="card-img" src={`img/${props.item.img}`} alt="example" />

            <div className="exp-description">
                <figure className="rating">
                    <img className="rating--star" src="img/star.png" alt="star rating" />
                    <figcaption className="rating--caption">{props.item.rating}</figcaption>
                </figure>

                <p className="exp-info"><span className="exp-quantity">({props.item.quantity})</span> ● <span className="exp-location">{props.item.country}</span></p>
            </div>
            <p className="exp-text">{props.item.title}</p>
            <p className="exp-price"><span className="price--bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

 export default Card;