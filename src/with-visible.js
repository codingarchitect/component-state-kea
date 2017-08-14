import { kea } from 'kea';
import PropTypes from 'prop-types';

export default kea({
  key: ({id}) => id,
  path: (key) => ['scenes', 'App', 'Alert', key],  
  actions: () => ({
    show: (args) => ({ ...args, type: 'show' }),
    hide: (args) => ({ ...args, type: 'hide' }),
  }),
  reducers: ({ actions, key }) => ({
    visible: [true, PropTypes.bool, {
      [actions.show]: (state, payload) => payload.key === key ? true : state,
      [actions.hide]: (state, payload) => payload.key === key ? false : state,
    }]
  })
});
