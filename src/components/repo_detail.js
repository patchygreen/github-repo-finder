import React from "react";
import PropTypes from "prop-types";
import star from '../images/svg/star.svg';
import eye from '../images/svg/eye.svg';
import fork from '../images/svg/fork.svg';

const imgIconStyle = {
    height: "15px"
};

/**
 * Functional component to display the details of a Github Repo.
 */

const RepoDetail = props => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h2>{props.repoName}</h2>
      </div>
      <div className="row mt-2">
        <div className="col border-right">
          <img
            src={star}
            alt="Stars"
            style={imgIconStyle}
          />
          <h5>{props.repoStars}</h5>
        </div>
        <div className="col border-right">
          <img
            src={eye}
            alt="Watchers"
            style={imgIconStyle}
          />
          <h5>{props.repoWatchers}</h5>
        </div>
        <div className="col">
          <img
            src={fork}
            alt="Forks"
            style={imgIconStyle}
          />
          <h5>{props.repoForks}</h5>
        </div>
      </div>
    </div>
  );
};

RepoDetail.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoStars: PropTypes.number.isRequired,
  repoWatchers: PropTypes.number.isRequired,
  repoForks: PropTypes.number.isRequired
};
export default RepoDetail;
