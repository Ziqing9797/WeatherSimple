/**
 * Created by www.wuleba.com on 2016/9/26.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {App} from './components/app';
import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App/>
    </Provider>
), document.querySelector('.container'));