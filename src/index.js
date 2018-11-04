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
import PokemonInfo from './hooks/UseReducerExample';
import Progress from './animations/Progress';
import Fade from './animations/Fade';

const VISIBLE = {
  IS_USE_STATE_VISIBLE: 'UseStateExample',
  IS_USE_CONTEXT_VISIBLE: 'UseContextExample',
  IS_USE_EFFECT_VISIBLE: 'UseEffectExample',
  IS_USE_CUSTOM_HOOKS_VISIBLE: 'UseCustomHooks',
  IS_USE_REDUCER_VISIBLE: 'UseReducerExample',
  IS_REACT_SPRING_1_VISIBLE: 'Progress',
  IS_REACT_SPRING_2_VISIBLE: 'Fade',
};

class App extends Component {
  state = {
    isVisible: [
      VISIBLE.IS_REACT_SPRING_1_VISIBLE,
      VISIBLE.IS_REACT_SPRING_2_VISIBLE,
    ],
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_USE_STATE_VISIBLE)}
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
          isVisible={isVisible.includes(VISIBLE.IS_USE_CONTEXT_VISIBLE)}
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
          isVisible={isVisible.includes(VISIBLE.IS_USE_EFFECT_VISIBLE)}
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
          isVisible={isVisible.includes(VISIBLE.IS_USE_CUSTOM_HOOKS_VISIBLE)}
          heading="useCustomHooks"
          sectionBg="purple-bg"
        >
          <div>
            <h1 className="heading">new way</h1>
            <CustomHook />
          </div>
        </Section>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_USE_REDUCER_VISIBLE)}
          heading="useReducer"
          sectionBg="white-bg"
        >
          <div>
            <h1 className="heading">Count Example</h1>
            <PokemonInfo />
          </div>
        </Section>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_REACT_SPRING_1_VISIBLE)}
          heading="React Spring Progress Bar Example"
          sectionBg="gainsboro-bg"
        >
          <Progress />
        </Section>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_REACT_SPRING_2_VISIBLE)}
          heading="React Spring Fade Bar Example"
          sectionBg="gainsboro-bg"
        >
          <Fade />
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
