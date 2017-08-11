import React from 'react';
import { kea } from 'kea';
import Alert from './Alert.jsx';
import Visible from './Visible';

const options = {
  actions: [
    Visible, [
      'show',
      'hide'
    ]
  ],
  props: [
    Visible, [
      'visible'
    ]
  ]

}

const App = function(props) { return (<div> 
    {props.visible} 
    <Alert message="Hello React" visible={true} id="Alert1" />
    <Alert message="Hello again React" visible={true} id="Alert2"/>
  </div>)
};

export default kea({ connect: options })(App);