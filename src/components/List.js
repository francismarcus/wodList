import React from 'react';
import { connect } from 'react-redux';
import { select } from '.././actions';

class List extends React.Component {

    renderList() {
      return this.props.wods.map((wod) => {
        return (
          <div className="item" key={wod.name}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => this.props.select(wod)}
                >
                more
              </button>
            </div>
            <div className="content">
              <div className="header">
                {wod.name}
              </div>
              <div className="description">
                <p>{wod.description}</p>
              </div>
            </div>
          </div>

        )
      })
    }
    render() {
        return (
          <div className="ui divided list">
            {this.renderList()}
          </div>


        )
    }
}

const mapStateToProps = state => {
  console.log(state)
  return { wods: state.wods };
}

export default connect(mapStateToProps, { select })(List);
