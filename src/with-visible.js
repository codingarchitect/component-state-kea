import { kea } from 'kea';
import PropTypes from 'prop-types';
import useVisible from './use-visible';

export default kea({
  connect: {
    actions: [
      useVisible, [
        'hideAlert'
      ]
    ],
  },
  selectors: () => ({
    isVisible: [
      () => [(_, props) => props.id, useVisible.selectors.visibleAlerts],
      (id, visibleAlerts) => visibleAlerts[id] || false,
      PropTypes.bool
    ]
  })
});
