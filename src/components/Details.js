import React from 'react';
import { connect } from 'react-redux';

const Details = (props) => {
  if (!props.wod) {
    return null
  }

    return (
        <div>
          <h3>{props.wod.name}</h3>
          <p> {props.wod.details} </p>
            <h4>Scaling:</h4>
            {props.wod.scaling}<br />
            <br />
            {props.wod.inter} <br />
            {props.wod.begin}
        </div>
    )
}

const mapStateToProps = state => {
  return { wod: state.selectedWods }
}

export default connect(mapStateToProps)(Details);
