import React from 'react';
import Visible from './Visible';

const EnhancedAlert = Visible(function ({ message, visible, actions: {hide} }) { return (visible && 
<div>
  {message} 
  &nbsp;
  <button onClick={hide}>x</button>
</div>)
});
export default EnhancedAlert;
