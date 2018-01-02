import React from "react";
import FilmListDetail from "./FilmListDetail";

const FilmList = props => {
  const films = props.films.map(film => (
    <FilmListDetail {...film} selectFilm={props.selectFilm} />
  ));
  return <div>{films}</div>;
};

export default FilmList;
