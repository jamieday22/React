import axios from "axios";

const ACTOR_API_BASE_URL = "http://44.202.231.42:8080/api/actors";

class ActorService {
  getActors() {
    return axios.get(ACTOR_API_BASE_URL);
  }
}

export default new ActorService();
