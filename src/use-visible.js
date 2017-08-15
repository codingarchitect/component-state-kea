import { kea } from 'kea';
import PropTypes from 'prop-types';

export default kea({
  actions: () => ({
    showAlert: (id) => ({ id }),
    hideAlert: (id) => ({ id })
  }),
  reducers: ({ actions }) => ({
    visibleAlerts: [{}, PropTypes.object, {
      [actions.showAlert]: (state, payload) => ({ ...state, [payload.id]: true }),
      [actions.hideAlert]: (state, payload) => ({ ...state, [payload.id]: false })
    }]
  })
});
