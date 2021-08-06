        // The redux store helper calls createStore() to create the centralized redux store to comunnicate with the app component ...

        import { createStore, applyMiddleware } from 'redux';
        import thunkMiddleware from 'redux-thunk';
        import { createLogger } from 'redux-logger';
        import rootReducer from '../reducers';

        const loggerMiddleware = createLogger();

        export const store = createStore(
            rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware)
        );