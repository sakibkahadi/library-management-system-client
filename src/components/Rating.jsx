

import StarRatings from 'react-star-ratings';

const Rating = ({rating}) => {
    const numericRating = parseFloat(rating);
    return (
        <div>
          
          <StarRatings
        rating={numericRating}
        starRatedColor="gold"
        starDimension="20px"
        starSpacing="2px"
        numberOfStars={10}
        name="rating"
      />
        </div>
      );
};

export default Rating;