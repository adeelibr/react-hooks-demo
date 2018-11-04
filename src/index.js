import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.scss';
// Helpers
import Section from './helpers/Section';
// Examples
import { Greeting, GreetingClass } from './hooks/UseStateExample';
import { Context, ContextClass } from './hooks/UseContextExample';
import { Title, TitleClass } from './hooks/UseEffectExample';
import { CustomHook } from './hooks/UseCustomHooks';

class App extends Component {
  state = {
    isUseStateVisible: false,
    isUseContextVisible: false,
    isUseEffectsVisible: false,
    isUseCustomHooksVisible: false,
  };

  render() {
    const {
      isUseStateVisible,
      isUseContextVisible,
      isUseEffectsVisible,
      isUseCustomHooksVisible,
    } = this.state;
    return (
      <div>
        <Section
          isVisible={isUseStateVisible}
          heading="useState"
          sectionBg="purple-bg"
        >
          <div>
            <h1 className="heading">new way</h1>
            <Greeting />
          </div>
          <div>
            <h1 className="heading">old way</h1>
            <GreetingClass />
          </div>
        </Section>
        <Section
          isVisible={isUseContextVisible}
          heading="useContext"
          sectionBg="white-bg"
        >
          <div>
            <h1 className="heading">new way</h1>
            <Context />
          </div>
          <div>
            <h1 className="heading">old way</h1>
            <ContextClass />
          </div>
        </Section>
        <Section
          isVisible={isUseEffectsVisible}
          heading="useEffect"
          sectionBg="gainsboro-bg"
        >
          <div>
            <h1 className="heading">new way</h1>
            <Title />
          </div>
          <div>
            <h1 className="heading">old way</h1>
            <TitleClass />
          </div>
        </Section>
        <Section
          isVisible={isUseCustomHooksVisible}
          heading="useCustomHooks"
          sectionBg="purple-bg"
        >
          <div>
            <h1 className="heading">new way</h1>
            <CustomHook />
          </div>
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
