import React from 'react';
import { connect } from 'kea';
import Alert from './Alert.jsx';
import useVisible from './use-visible';

function App (props) {
  const { actions: { showAlert }, visibleAlerts } = props;
  return (<div>
    <Alert message='Hello React' id='Alert1' />
    <button onClick={() => showAlert('Alert1')} disabled={visibleAlerts.Alert1}>Show Alert</button>
    <br />
    <Alert message='Hello again React' id='Alert2' />
    <button onClick={() => showAlert('Alert2')} disabled={visibleAlerts.Alert2}>Show Alert</button>
  </div>);
}

const EnhancedApp = useVisible(App);

export default EnhancedApp;
