import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import RepoDetail from "./components/repo_detail";
import "./App.css";

/**
 * Main Class component for our SPA.
 * constructor() - initialises the application state with default values.
 * githubSearch - uses Fetch API to request repository data from the github API.
 * render() - Renders the SPA markup and child components - SearchBar and RepoDetail.
 */

class App extends Component {
  // Initialise the state.
  constructor(props) {
    super(props);
    this.state = {
      message: "Enter a search term.",
      repoName: "",
      repoStars: 0,
      repoForks: 0,
      repoWatchers: 0
    };
  }

  // Retrieve the repo data from the github API.
  githubSearch(term) {
    if (!term.trim()) {
      this.setState({ message: "Please provide a search term" });
      return;
    }

    const searchTerm = term.trim().toLowerCase();

    fetch(`https://api.github.com/repos/${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          // Reponse is not OK. Throw useful error.
          if (response.status === 404) {
            throw new Error("We cannot find this repo. Please try again.");
          } else {
            throw new Error(
              "Something has gone wrong. Please try again later."
            );
          }
        }
        // All good.
        return response.json();
      })
      .then(repo => {
        // We have the repo now so set the data we need in state.
        this.setState({
          message: "",
          repoName: searchTerm,
          repoStars: repo.stargazers_count,
          repoForks: repo.forks_count,
          repoWatchers: repo.subscribers_count
        });
      })
      .catch(error => {
        this.setState({ message: error.message.toString() });
      });
  }

  // Render the SPA and child components.
  render() {
    return (
      <div className="App container-fluid mt-5 p-4 rounded border border-dark">
        <SearchBar
          onSearchSubmit={term => this.githubSearch(term)}
          placeholder="Enter a github repo name e.g. facebook/react"
        />
        {this.state.message ? (
          <div className="mt-3 alert alert-info" role="alert">
            {this.state.message}
          </div>
        ) : (
          <RepoDetail
            repoName={this.state.repoName}
            repoStars={this.state.repoStars}
            repoForks={this.state.repoForks}
            repoWatchers={this.state.repoWatchers}
          />
        )}
      </div>
    );
  }
}

export default App;
