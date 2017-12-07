import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Info extends Component {

  render() {
    return (
      <div className="info">
        INFO

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
