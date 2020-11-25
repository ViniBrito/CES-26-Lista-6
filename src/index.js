import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import calculator from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './Calculator';
import Header from './Header';
import './styles.css';

var store = createStore(calculator);

render(
	<Provider store={store}>
		<Header />
		<Calculator />
	</Provider>,
	document.getElementById('root')
);