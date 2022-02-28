import React, { Component } from "react";
import CategoryService from "../services/CategoryService";

class ListCategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
    };
  }
  componentDidMount() {
    CategoryService.getCategorys().then((res) => {
      this.setState({ categorys: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Categorys List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Category Name</th>
              </tr>
            </thead>

            <tbody>
              {this.state.categorys.map((category) => (
                <tr key={category.category_id}>
                  <td>{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCategoryComponent;
