import React from 'react';
import ReactStars from "react-rating-stars-component";

class RatingStar extends React.Component {
    ratingChanged = (newRating) => {
        console.log(newRating);
    };

    render() {
        return (
            <ReactStars
                count={5}
                onChange={(newRating) => this.ratingChanged(newRating)}
                size={24}
                activeColor="#ffd700"
            />
        );
    }
}

export default RatingStar;