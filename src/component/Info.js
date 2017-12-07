import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Info extends Component {

  render() {
    var distributionOfTraining = this.props.data.distributionOfTraining[this.props.data.distributionOfTraining.length - 1]

    return (
      <div className="info">
        <ul>
          {Object.keys(distributionOfTraining).map(key => (
            <li key={key}>{distributionOfTraining[key]}</li>
            ))}
          </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({

  })
)(Info);
