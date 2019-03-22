import React from 'react';
import List from './List';
import Details from './Details';

const Container = () => {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <List/>
          </div>
          <div className="column eight wide">
            <Details />
          </div>
        </div>
      </div>
    )
}

export default Container;
