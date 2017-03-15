import React from 'react';
import App from '../App';
import { mountWithRedux } from '../test_helper';

describe('App', function() {
    let component;

    beforeEach(() => {
        component = mountWithRedux(<App />);
    });

    it('renders something', () => {
        expect(component.exists()).toBe(true);
    });

    it('shows WelcomePage', () => {
        expect(component.find('.WelcomePage').exists()).toBe(true);
    });
});