import React, { Component } from "react";
import FilmService from "../services/FilmService";

class ListFilmComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }
  componentDidMount() {
    FilmService.getFilms().then((res) => {
      this.setState({ films: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Films List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Film Title</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Release Year</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.films.map((film) => (
                <tr key={film.film_id}>
                  <td>{film.title}</td>
                  <td>{film.name}</td>
                  <td>{film.rating}</td>
                  <td>{film.release_Year}</td>
                  <td>{film.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListFilmComponent;
