import React, { Component } from "react";
import ReviewService from "../services/ReviewService";

class ListReviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentDidMount() {
    ReviewService.getReviews().then((res) => {
      this.setState({ reviews: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Reviews List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Reviews</th>
              </tr>
            </thead>

            <tbody>
              {this.state.reviews.map((review) => (
                <tr key={review.actor_id}>
                  <td>{review.description}</td>
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
