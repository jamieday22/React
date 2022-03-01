import axios from "axios";

const LANGUAGE_API_BASE_URL = "http://44.202.231.42:8080/api/languages";

class LanguageService {
  getLanguages() {
    return axios.get(LANGUAGE_API_BASE_URL);
  }
}

export default new LanguageService();
