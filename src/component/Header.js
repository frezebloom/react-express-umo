import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  //форма нового документа
  newStateAddForm = () => {
    this.props.newStateAddForm(true);
    this.props.newStateUpdateForm(false);
    this.props.showSearhForm(false);
    this.props.showQuickSearch(true);
    this.props.showSearchTable(false);
    this.props.showTable(true);
    this.props.showBack(true);
    this.props.showInfo(false);
  };

  //Быстрый поиск
  eventQuickSearch = event => {
    this.props.quickSearch(event.target.value);
    this.props.showInfo(false);
  };

  //Форма поиска
  newStateSearchForm = () => {
    this.props.showSearhForm(true);
    this.props.showBack(true);
    this.props.newStateAddForm(false);
    this.props.newStateUpdateForm(false);
    this.props.showQuickSearch(false);
    this.props.showInfo(false);
  };
  //button Main
  mainState = () => {
    this.props.newStateAddForm(false);
    this.props.newStateUpdateForm(false);
    this.props.showSearhForm(false);
    this.props.showSearchTable(false);
    this.props.showAddValidation(false);
    this.props.showInfo(false);
    this.props.showTrashMessage(false);
    this.props.newStateTrashModalWindow(false);
    this.props.showUpdateValidation(false);
    this.props.showTable(true);
    this.props.showQuickSearch(true);
  };

  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-md-8">
            <button
              type="button"
              className="btn btn-default"
              onClick={this.mainState}
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
              style={{
                display: this.props.data.showQuickSearch ? "block" : "none"
              }}
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
    showQuickSearch: state => {
      dispatch({ type: "SHOW_QUICKSEARCH", payload: state });
    },
    newStateUpdateForm: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    showSearhForm: state => {
      dispatch({ type: "SHOW_SEARHFORM", payload: state });
    },
    showTable: state => {
      dispatch({ type: "SHOW_TABLE", payload: state });
    },
    showSearchTable: state => {
      dispatch({ type: "SHOW_SEARCHTABLE", payload: state });
    },
    showAddValidation: state => {
      dispatch({ type: "SHOW_ADDVALIDATION", payload: state });
    },
    showInfo: state => {
      dispatch({ type: "SHOW_INFO", payload: state });
    },
    showTrashMessage: state => {
      dispatch({ type: "SHOW_TRASHMESSAGE", payload: state });
    },
    newStateTrashModalWindow: state => {
      dispatch({ type: "SHOW_TRASHMODALWINDOW", payload: state });
    },
    showUpdateValidation: state => {
      dispatch({ type: "SHOW_UPDATEVALIDATION", payload: state });
    },
    showBack: state => {
      dispatch({ type: "SHOW_BACK", payload: state });
    }
  })
)(Header);
