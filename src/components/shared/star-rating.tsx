import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  const starCount = Math.floor(rating);
  const remainder = rating - starCount;

  const stars = Array.from({ length: 5 }).map((_, index) => {
    if (index < starCount) {
      return <FaStar key={index} />;
    } else if (index === starCount && remainder >= 0.5) {
      return <FaRegStarHalfStroke key={index} />;
    } else {
      return <FaRegStar key={index} />;
    }
  });

  return <div className="flex text-primary-foreground">{stars}</div>;
};

export default StarRating;
