import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import reducers from './reducers';

// Render a Component and wrap it in the Redux store
function mountWithRedux(Component, state = {}) {
    return mount(
        <Provider store={createStore(reducers, state)}>
            {Component}
        </Provider>
    );
}

export { mountWithRedux };


