import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { rootReducer } from './reducers/index';
import { Provider } from 'react-redux'
import App from './App';


export const store = createStore(rootReducer)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);