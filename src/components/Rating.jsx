import './styles/Rating.scss';
import star from '../assets/star.svg';
import starActive from '../assets/starActive.svg';

function Rating({ rating }) {
  let notations = [];
  let i = 1;
  while (i <= 5) {
    if (i <= rating) {
      notations.push(
        <img src={starActive} key={i} alt="star" className="rating-star" />
      );
    } else {
      notations.push(
        <img src={star} key={i} alt="star" className="rating-star" />
      );
    }
    i++;
  }

  return (
    <div className="rating-block">{notations.map((notation) => notation)}</div>
  );
}

export default Rating;
