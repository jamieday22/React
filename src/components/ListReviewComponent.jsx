import React, { Component } from "react";
import ReviewService from "../services/ReviewService";

class ListReviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.addReview = this.addReview.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(review_id) {
    ReviewService.deleteReview(review_id).then((res) => {
      this.setState({
        reviews: this.state.reviews.filter(
          (review) => review.review_id !== review_id
        ),
      });
    });
  }

  editReview(review_id) {
    this.props.history.push(`/update-review/${review_id}`);
  }

  componentDidMount() {
    ReviewService.getReviews().then((res) => {
      this.setState({ reviews: res.data });
    });
  }
  addReview() {
    this.props.history.push("/add-reviews");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Reviews List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addReview}>
            {" "}
            Add Review
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Reviews</th>
                <th>Film ID</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.reviews.map((review) => (
                <tr key={review.film_Id}>
                  <td>{review.description}</td>
                  <td>{review.film_Id}</td>
                  <td>
                    <button
                      onClick={() => this.editReview(review.review_id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteReview(review.review_id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListReviewComponent;
