import { Rating } from "@mui/material";
import "./reviewCardStyle.css";
import { FaCircleCheck } from "react-icons/fa6";

type propsCardType = {
    name: string
    review: string
}

function ReviewCard(props: propsCardType) {
  return (
    <div className="review-card">
        <Rating name="read-only" value={5} readOnly />
        <div className="user-review">
            <h3>{props.name}</h3>
            <FaCircleCheck className="check"/>
        </div>
        <p>
            {props.review}
        </p>
    </div>
  )
}

export default ReviewCard;
