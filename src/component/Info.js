import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Info extends Component {
  componentDidMount() {
    let coordinates = this.props.data.coordinates[
      this.props.data.coordinates.length - 1
    ];
    document.getElementById("doft").style.top = coordinates.positionY + "px";
    document.getElementById("doft").style.left = coordinates.positionX + "px";
  }

  render() {
    var distributionOfTraining = this.props.data.distributionOfTraining[
      this.props.data.distributionOfTraining.length - 1
    ];
    return (
      <div className="info" id="doft">
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
  dispatch => ({})
)(Info);
