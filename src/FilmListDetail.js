import React from "react";

const FilmListDetail = props => {
  return (
    <div onClick={() => props.selectFilm(props)} style={{ margin: "1em" }}>
      {props.title}
    </div>
  );
};

export default FilmListDetail;
