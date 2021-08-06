import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
// in order to work with forms in redux I should work with provider library and wrap up the  App component with it.
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

// We wrapp the App in the <Provider /> component from the react-redux library to make the global redux store available throughout the application. (more precisely )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)





