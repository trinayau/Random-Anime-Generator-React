import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import doggosReducer from '../reducers/doggoReducer'

const TestProviders = ({ initState }) => {
    initState ||= { doggos: [], loading: false }
    const testStore = createStore(() => doggosReducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

import axios from 'axios';
jest.mock('axios')
axios.get.mockResolvedValue({ data: { message: [] }})

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;