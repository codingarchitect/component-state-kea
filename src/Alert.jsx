import React from 'react';
import withVisible from './with-visible';

function Alert (props) { 
  const { message, isVisible, id, actions: { hideAlert } } = props;
  return isVisible ? (<div>
    {message}
    &nbsp;
    <button onClick={() => hideAlert(id)}>x</button>
  </div>) : null;  
}

const EnhancedAlert = withVisible(Alert);

export default EnhancedAlert;
