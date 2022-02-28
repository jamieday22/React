import React, { Component } from "react";
import LanguageService from "../services/LanguageService";

class ListLanguageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
    };
  }
  componentDidMount() {
    LanguageService.getLanguages().then((res) => {
      this.setState({ language: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Languages List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.languages.map((language) => (
                <tr key={language.language_id}>
                  <td>{language.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListLanguageComponent;
