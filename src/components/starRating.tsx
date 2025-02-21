import "font-awesome/css/font-awesome.min.css";

const StarRating = ({ selectedStars, color }: any) => {
  const starColor = `#6f2082`;
  const totalStars = 5;
  const firstMethod = () => {
    return [...Array(totalStars)].map((el, i: any) =>
      i < selectedStars ? (
        <i
          key={i}
          className={`fa fa-star ${color ? `text-[${color}]` : `text-tertiary`} `}
        />
      ) : (
        <i key={i} className="fa fa-star-o" />
      )
    );
  };

  const secondMethod = () => {
    return [...Array(totalStars)].map((el, i: any) =>
      i < selectedStars && i + 1 > selectedStars ? (
        <i
          key={i}
          className={`fa fa-star-half-o ${color ? `text-[${color}]` : `text-tertiary`} `}
        />
      ) : i < selectedStars ? (
        <i
          key={i}
          className={`fa fa-star ${color ? `text-[${color}]` : `text-tertiary`} `}
        />
      ) : (
        <i key={i} className="fa fa-star-o" />
      )
    );
  };
  return (
    <>{Number.isInteger(selectedStars) ? firstMethod() : secondMethod()}</>
  );
};

export default StarRating;
