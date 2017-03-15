## Jest + Enzime vs Mocha + chaiJquery

* version with Mocha + chaiJquery
  * /test
  * Default on [Redux Simple Starter](https://github.com/StephenGrider/ReduxSimpleStarter)

* version with Jest + Enzime
  * /src/\_\_tests\_\_
  * Jest is default on [Create React App](https://github.com/facebookincubator/create-react-app)
  
### Useful links

* [Jest - DOM Testing](https://facebook.github.io/jest/docs/tutorial-react.html#dom-testing)
* [Jest - Expect](https://facebook.github.io/jest/docs/expect.html)
* [Enzime - ReactWrapper](http://airbnb.io/enzyme/docs/api/ReactWrapper/exists.html)
* [Create React App - Running Tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### Sample code

#### Mocha + chaiJquery - [/test/components/welcome_page_test.js](/test/components/welcome_page_test.js)

```js
    beforeEach(() => {
        component = renderComponent(WelcomePage);
    });

    it('renders text ', () => {
        expect(component).to.contain('Example list of languages');
    });
    
    it('when submitted, clears the input', () => {
        component.simulate('submit');
        expect(component.find('input:text')).to.have.value('');
    });
```

#### Jest + Enzime - [/src/\_\_tests\_\_/components/WelcomePage.test.js](/src/__tests__/WelcomePage.test.js)

```js
    beforeEach(() => {
        component = mountWithRedux(<WelcomePage />);
    });

    it('renders text ', () => {
        expect(component.text()).toContain('Example list of languages');
    });
    
    it('when submitted, clears the input', () => {
        component.simulate('submit');
        // Enzime does not have pseudo-class CSS selector yet
        // So we cant use input:text
        expect(component.find('input').prop('value')).toBe('');
    });
```

### Created with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

