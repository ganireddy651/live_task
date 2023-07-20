const Movie = (props) => {
  const { eachItem, onRemoveMovie } = props;
  const { id, movieName, directorName } = eachItem;
  const OnClickRemoveDetails = () => {
    onRemoveMovie(id);
  };
  return (
    <li>
      <p>{movieName}</p>
      <p>{directorName}</p>
      <button onClick={OnClickRemoveDetails} type="button">
        Remove
      </button>
    </li>
  );
};

export default Movie;
