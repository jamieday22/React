import React, { Component } from "react";
import ReviewService from "../services/ReviewService";

class CreateReviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      film_Id: "",
    };
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changeFilm_IdHandler = this.changeFilm_IdHandler.bind(this);
    this.saveReview = this.saveReview.bind(this);
  }
  saveReview = (e) => {
    e.preventDefault();
    let review = {
      description: this.state.description,
      film_Id: this.state.film_Id,
    };
    console.log("review => " + JSON.stringify(review));

    ReviewService.createReview(review).then((res) => {
      this.props.history.push("reviews");
    });
  };

  changeDescriptionHandler(event) {
    this.setState({ description: event.target.value });
  }

  changeFilm_IdHandler(event) {
    this.setState({ film_Id: event.target.value });
  }

  cancel() {
    this.props.history.push("/reviews");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">ADD REVIEW</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Please write a review</label>
                    <input
                      placeholder="Description"
                      description="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Please add the film id you want to add a review for
                    </label>
                    <input
                      placeholder="Film_Id"
                      description="film_Id"
                      className="form-control"
                      value={this.state.film_Id}
                      onChange={this.changeFilm_IdHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveReview}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateReviewComponent;
