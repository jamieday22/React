import axios from "axios";

const FILM_API_BASE_URL = "http://44.202.231.42:8080/api/films";

class FilmService {
  getFilms() {
    return axios.get(FILM_API_BASE_URL);
  }
}

export default new FilmService();
