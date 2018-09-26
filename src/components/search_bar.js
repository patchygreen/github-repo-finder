import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({ term });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-6 col-md-9">
            <input
              className="form-control"
              placeholder={this.props.placeholder}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e =>
                (e.target.placeholder =
                  this.props.placeholder || "Enter github repo name here.")
              }
              aria-label="Enter github repo name here."
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <button type="submit" className="btn btn-secondary btn-block">
              Fetch Repo
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
export default SearchBar;
