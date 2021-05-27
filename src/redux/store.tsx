import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

const logger = createLogger({level: 'console', diff: true});
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;