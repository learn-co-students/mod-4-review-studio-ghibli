import React, { Component } from "react";
import logo from "./logo.svg";
import MainPage from "./MainPage";
import FilmDetail from "./FilmDetail";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    films: [],
    selectedFilm: null,
    searchQuery: "",
    loadingScreen: "block"
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  selectFilm = film => {
    this.setState(
      { selectedFilm: film },
      this.props.history.push(`/film/${film.id}`)
    );
  };

  handleChange = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                {...this.state}
                selectFilm={this.selectFilm}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            path="/film/:film_id"
            render={props => (
              <FilmDetail {...this.state.selectedFilm} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
