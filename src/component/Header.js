import React, { Component } from "react";
import { connect } from "react-redux";


class Header extends Component {
  constructor(props) {
    super(props);
    this.newStateAddForm = this.newStateAddForm.bind(this);
    this.eventQuickSearch = this.eventQuickSearch.bind(this);
  }
  //форма нового документа
  newStateAddForm() {
    this.props.newStateAddForm(true);
    this.props.newStateUpdateForm(false);
    this.props.showSearhForm(false);
  }

  //Быстрый поиск
  eventQuickSearch(event) {
    this.props.quickSearch(event.target.value);
  }

  //Форма поиска
  newStateSearchForm = () => {
    this.props.showSearhForm(true);
    this.props.newStateAddForm(false);
    this.props.newStateUpdateForm(false);
  }

  render() {

    return (
      <div className="header">
        <div className="row">
          <div className="col-md-8">
          <button
            type="button"
            className="btn btn-default"
          >
            Главная
          </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.newStateAddForm}
            >
              Новый документ
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.newStateSearchForm}
            >
              Поиск документов
            </button>
          </div>
          <div className="col-xs-3">
            <input
              type="text"
              className="form-control"
              placeholder="Поиск"
              onChange={this.eventQuickSearch}
              style={{display: this.props.data.showQuickSearch ? 'block' : 'none' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    newStateAddForm: state => {
      dispatch({ type: "SHOW_ADDFORM", payload: state });
    },
    quickSearch: data => {
      dispatch({ type: "QUICK_SEARCH", payload: data });
    },
    newStateUpdateForm: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    showSearhForm: state => {
      dispatch({ type: "SHOW_SEARHFORM", payload: state });
    }
  })
)(Header);
