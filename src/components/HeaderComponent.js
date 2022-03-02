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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              <h3> Bad Reviewer </h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link active"
                  href="http://3.91.54.143:3000/reviews"
                >
                  Reviews
                </a>
                <a
                  className="nav-item nav-link"
                  href="http://3.91.54.143:3000/films"
                >
                  Films
                </a>
                <a
                  className="nav-item nav-link"
                  href="http://3.91.54.143:3000/actors"
                >
                  Actors
                </a>
                <a
                  className="nav-item nav-link"
                  href="http://3.91.54.143:3000/categorys"
                >
                  Categorys
                </a>
              </div>
            </div>
          </nav>
          <div>
            <img
              src="https://townsquare.media/site/622/files/2011/11/yahooavengersbannerbig.jpg"
              width="100%"
              height="200"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
