import React from 'react';
import { connect } from 'kea';
import Alert from './Alert.jsx';
import withVisible from './with-visible';

const options = {
  actions: [
    withVisible, [
      'show',
      'hide'
    ]
  ],
  props: [
    (state) => {
      return state.scenes.App && 
        state.scenes.App.Alert && 
        state.scenes.App.Alert.Alert1 && 
        state.scenes.App.Alert.Alert2 ? state.scenes.App.Alert: {
        Alert1: { visible: true },
        Alert2: { visible: true }
      }
    }, [
      'Alert1',
      'Alert2'
    ]
  ],
};

function App (props) { 
  const { actions: { show } } = props;
  return (
    <div>
      <Alert message="Hello React" id="Alert1"/>
      <button onClick={() => show({ key: 'Alert1'})} disabled={props.Alert1.visible}>Show Alert</button> <br />
      <Alert message="Hello again React" id="Alert2"/>
      <button onClick={() => show({ key: 'Alert2'})} disabled={props.Alert2.visible}>Show Alert</button>
    </div>
  );
}

const EnhancedApp = connect(options)(App);

export default EnhancedApp;
