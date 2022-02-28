import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              My Reviewer
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-item nav-link active"
                  href="http://localhost:3000/reviews"
                >
                  Reviews
                </a>
                <a class="nav-item nav-link" href="http://localhost:3000/films">
                  Films
                </a>
                <a
                  class="nav-item nav-link"
                  href="http://localhost:3000/actors"
                >
                  Actors
                </a>
                <a
                  class="nav-item nav-link"
                  href="http://localhost:3000/categorys"
                >
                  Categorys
                </a>
              </div>
            </div>
          </nav>
          <div class="image.png">
            <img src="src\banner3.png" />
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
