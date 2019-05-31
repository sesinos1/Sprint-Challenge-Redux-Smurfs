import React from "react";
import { connect } from "react-redux";
import { toggleUpdateSmurf, deleteSmurf, toggleSmurf  } from "../actions/index";
import UpdateSmurfForm from "./updateSmurfsFrom";

const SelectedSmurf = function(props) {
    // deleteSmurf = () => {
    //     this.props.deleteSmurf();
    //   };
  return (
    <div>
      <h4>Name: {props.selected.name}</h4>
      <span onClick={() => props.handleShowSmurf({})}> X </span>
      <div>Height: {props.selected.height}</div>
      <div>Age: {props.selected.age} smurfs</div>
      <button onClick={() => props.toggleUpdateSmurf()}>Update</button>
      {/* <button onClick={()=> props.toggleSmurf()}>Click Me Then Delete</button> */}
      {props.showUpdate ? <button onClick={() => props.deleteSmurf(props.selected.id)}>Delete Smurf</button> : null}
      {props.showUpdate ? <UpdateSmurfForm id={props.selected.id} /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  const { singleSmurfReducer } = state;
  return {
    showUpdate: singleSmurfReducer.showUpdate

  };
};

export default connect(
  mapStateToProps,
  { toggleUpdateSmurf, deleteSmurf, toggleSmurf }
)(SelectedSmurf);