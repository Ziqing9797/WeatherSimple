"use strict";
/**
 * Created by www.wuleba.com on 2016/9/26.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var app_1 = require("./components/app");
var reducers_1 = require("./reducers");
var createStoreWithMiddleware = redux_1.applyMiddleware()(redux_1.createStore);
ReactDOM.render((React.createElement(react_redux_1.Provider, { store: createStoreWithMiddleware(reducers_1.default) },
    React.createElement(app_1.App, null))), document.querySelector('.container'));
//# sourceMappingURL=index.js.map