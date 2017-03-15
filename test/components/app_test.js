import { renderComponent , expect } from '../test_helper';
import App from '../../src/App';

describe('App' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('renders something', () => {
        expect(component).to.exist;
    });

    it('shows WelcomePage', () => {
        expect(component.find('.WelcomePage')).to.exist;
    });
});