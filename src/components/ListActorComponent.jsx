import React, { Component } from "react";
import ActorService from "../services/ActorService";

class ListActorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
    };
  }
  componentDidMount() {
    ActorService.getActors().then((res) => {
      this.setState({ actors: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Actors List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Actor First Name</th>
                <th>Actor Last Name</th>
              </tr>
            </thead>

            <tbody>
              {this.state.actors.map((actor) => (
                <tr key={actor.actor_id}>
                  <td>{actor.firstName}</td>
                  <td>{actor.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListActorComponent;
