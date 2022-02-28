import axios from "axios";

const REVIEW_API_BASE_URL = "http://localhost:8080/api/reviews";

class ReviewService {
  getReviews() {
    return axios.get(REVIEW_API_BASE_URL);
  }
  createReview(review) {
    return axios.post(REVIEW_API_BASE_URL, review);
  }

  getReviewById(review_id) {
    return axios.get(REVIEW_API_BASE_URL, +"/" + review_id);
  }

  updateReview(review, review_id) {
    return axios.put(REVIEW_API_BASE_URL + "/" + review_id, review);
  }

  deleteReview(review_id) {
    return axios.delete(REVIEW_API_BASE_URL + "/" + review_id);
  }
}

export default new ReviewService();
