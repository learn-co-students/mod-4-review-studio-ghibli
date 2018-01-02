import React from "react";
import Search from "./Search";
import FilmList from "./FilmList";

const MainPage = props => {
  console.log(props);
  const filteredFilms = props.films.filter(film =>
    film.title.toLowerCase().includes(props.searchQuery)
  );

  filteredFilms.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return (
    <div>
      <Search
        searchQuery={props.searchQuery}
        handleChange={props.handleChange}
      />
      <FilmList films={filteredFilms} selectFilm={props.selectFilm} />
    </div>
  );
};

export default MainPage;
