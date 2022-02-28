import React, { Component } from "react";
import FilmService from "../services/FilmService";
import ListCategoryComponent from "./ListCategoryComponent";

class ListFilmComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    FilmService.getFilms().then((res) => {
      console.log(res);
      this.setState({ films: res.data });
    });
  }
  render() {
    // // console.log(this.state.films[0].category[0]);
    // this.state.films.forEach((film) => {
    //   if (film.category.length !== 0) {
    //     console.log(film.category[0].name);
    //   }
    // });
    // //const a1 = ["Hello", "Cody"];
    return (
      <div>
        <h2 className="text-center">Films List</h2>
        <div></div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Film Title</th>
                <th>Language</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Release Year</th>
                <th>Description</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.films.map((film) => (
                <tr key={film.film_id}>
                  <td>{film.title}</td>
                  <td>{film.language.name}</td>
                  <td>
                    {film.category.length !== 0
                      ? film.category.map((item) => item.name)
                      : "N/A"}
                  </td>

                  <td>{film.rating}</td>
                  <td>{film.release_Year}</td>
                  <td>{film.description}</td>
                  <td>
                    {film.reviews.length !== 0
                      ? film.reviews.map((item) => item.description)
                      : "N/A"}
                  </td>
                  {/* <td>{film.review.description}</td> */}
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
