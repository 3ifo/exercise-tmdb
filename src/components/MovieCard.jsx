const MovieCard = ({ title, description, cover, genres }) => {
  return (
    <div>
      <figure>
        <img src={`https://image.tmdb.org/t/p/w200${cover}`} alt="" />
      </figure>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{genres}</p>
    </div>
  );
};

export default MovieCard;
