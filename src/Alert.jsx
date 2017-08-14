import React from 'react';
import withVisible from './with-visible';

const EnhancedAlert = withVisible(
  function Alert(props) {
    const { message, visible, actions: {hide} } = props;
    return (visible && 
      <div>
        {message} 
        &nbsp;
        <button onClick={hide}>x</button>
      </div>);
});

export default EnhancedAlert;
