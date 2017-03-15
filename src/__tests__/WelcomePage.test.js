import React from 'react';
import WelcomePage from '../WelcomePage';
import { mountWithRedux } from '../test_helper';

describe('WelcomePage' , () => {
    let component;

    beforeEach(() => {
        component = mountWithRedux(<WelcomePage />);
    });

    it('renders text ', () => {
        expect(component.text()).toContain('Example list of languages');
    });


    it('has a list', () => {
        const state = {
            languages: ['C#', 'C++', 'Rust']
        };
        component = mountWithRedux(<WelcomePage />, state);

        const $ul = component.find('ul');
        expect($ul.exists()).toBe(true);
        const $lis = $ul.find('li');
        expect($lis.length).toBe(state.languages.length);

        $lis.forEach(($li, index) =>
            expect($li.text()).toContain(state.languages[index])
        );
    });

    it('show text input', () => {
        // Enzime does not have pseudo-class CSS selector yet
        // So we cant use input:text
        expect(component.find('input').exists()).toBe(true);
    });

    it('has a button', () => {
        expect(component.find('button').exists()).toBe(true);
    });

    describe('Entering new item' , () => {
        beforeEach(() => {
            // see note above about input:text
            component.find('input').simulate('change', {
                target: { value: 'Whitespace' }
            });
        });

        it('show that text in text input', () => {
            expect(component.find('input').prop('value')).toBe('Whitespace');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('input').prop('value')).toBe('');
        });
    });
});