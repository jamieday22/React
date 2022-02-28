import React, { Component } from "react";
import ReviewService from "../services/ReviewService";

class UpdateReviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review_id: this.props.match.params.review_id,
      description: "",
      film_Id: "",
    };
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changeFilm_IdHandler = this.changeFilm_IdHandler.bind(this);
    this.updateReview = this.updateReview.bind(this);
  }

  componentDidMount() {
    ReviewService.getReviewById(this.state.review_id).then((res) => {
      let review = res.data;
      this.setState({
        description: review.description,
        film_Id: review.film_Id,
      });
    });
  }
  updateReview = (e) => {
    e.preventDefault();
    let review = {
      description: this.state.description,
      film_Id: this.state.film_Id,
    };
    console.log("review => " + JSON.stringify(review));
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
              <h3 className="text-center">UPDATE REVIEW</h3>
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
                  <button
                    className="btn btn-success"
                    onClick={this.updateReview}
                  >
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

export default UpdateReviewComponent;
