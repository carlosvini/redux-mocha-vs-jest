import { renderComponent , expect } from '../test_helper';
import WelcomePage from '../../src/WelcomePage';

describe('WelcomePage' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(WelcomePage);
    });

    it('renders text ', () => {
        expect(component).to.contain('Example list of languages');
    });

    it('has a list', () => {
        const state = {
            languages: ['C#', 'C++', 'Rust']
        };
        component = renderComponent(WelcomePage, null, state);

        const $ul = component.find('ul');
        expect($ul).to.exist;
        const $li = $ul.find('li');
        expect($li.length).to.equal(state.languages.length);

        state.languages.forEach(language =>
            expect($li).to.contain(language)
        );
    });

    it('show text input', () => {
        expect(component.find('input:text')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('Entering new item' , () => {
        beforeEach(() => {
            component.find('input:text').simulate('change', 'Whitespace');
        });

        it('show that text in text input', () => {
            expect(component.find('input:text')).to.have.value('Whitespace');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('input:text')).to.have.value('');
        });
    });
});