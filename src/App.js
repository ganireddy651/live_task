import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Movie from "./Movie";
import "./styles.css";

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [listofMovie, setListofMovie] = useState([]);

  const onChangeMovieName = (e) => {
    setMovieName(e.target.value);
  };

  const onChangeDirectorName = (e) => {
    setDirectorName(e.target.value);
  };
  const onClickAddDetails = () => {
    if (movieName === "" || directorName === "") {
      alert("Enter movie name and director name");
    } else {
      const newMovie = {
        id: uuidv4(),
        movieName,
        directorName
      };
      setListofMovie((prevList) => [...prevList, newMovie]);
      setMovieName("");
      setDirectorName("");
    }
  };

  const onRemoveMovie = (id) => {
    const filterData = listofMovie.filter((each) => each.id !== id);
    setListofMovie(filterData);
  };

  return (
    <div className="App">
      <label htmlFor="moviename">Movie Name</label>
      <br />
      <input
        onChange={onChangeMovieName}
        value={movieName}
        id="moviename"
        type="text"
      />
      <br />
      <label htmlFor="directorname">Director Name</label>
      <br />
      <input
        onChange={onChangeDirectorName}
        value={directorName}
        id="directorname"
        type="text"
      />
      <br />
      <button onClick={onClickAddDetails} type="button">
        Add
      </button>
      <br />
      {listofMovie.length === 0 ? null : (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {listofMovie.map((eachItem) => (
            <Movie
              eachItem={eachItem}
              onRemoveMovie={onRemoveMovie}
              key={eachItem.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
