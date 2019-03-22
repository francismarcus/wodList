import React from 'react';
import { connect } from 'react-redux';

const Details = (props) => {
  if (!props.wod) {
    return null
  }

    return (
        <div>
          <h3>{props.wod.name}</h3>
          <p>

            <h4>Description:</h4> {props.wod.details}
          </p>
        </div>
    )
}

const mapStateToProps = state => {
  return { wod: state.selectedWods }
}

export default connect(mapStateToProps)(Details);
