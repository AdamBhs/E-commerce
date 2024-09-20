import "./styleCard.css";

type cardType = {
    image: string
    rating: number
    price: number
    title: string
}

export default function Card(props: cardType) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            <h3 className="product-name">
                {props.title}
            </h3>
            <div className="rating-data">
                <div className="rating">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label htmlFor="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label htmlFor="star4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label htmlFor="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label htmlFor="star2" title="text"></label>
                    <input defaultChecked type="radio" id="star1" name="rate" value="1" />
                    <label htmlFor="star1" title="text"></label>
                </div>
                <p><span>{props.rating}</span>/5</p>
            </div>
            <h3 className="price">${props.price}</h3>
        </div>
    )
}
