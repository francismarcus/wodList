import React from 'react';
import List from './List';

const Container = () => {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <List/>
          </div>
        </div>
      </div>
    )
}

export default Container;
