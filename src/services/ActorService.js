import axios from "axios";

const ACTOR_API_BASE_URL = "http://localhost:8080/api/actors";

class ActorService {
  getActors() {
    return axios.get(ACTOR_API_BASE_URL);
  }
}

export default new ActorService();
