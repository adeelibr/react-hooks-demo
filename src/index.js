import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.scss';
// Examples
import { Greeting, GreetingClass } from './hooks/UseStateExample';
import { Context, ContextClass } from './hooks/UseContextExample';
import { Title, TitleClass } from './hooks/UseEffectExample';

const App = () => {
  return (
    <div>
      <h1 className="main-heading">useState</h1>
      <section className="section purple-bg">
        <div>
          <h1 className="heading">new way</h1>
          <Greeting />
        </div>
        <div>
          <h1 className="heading">old way</h1>
          <GreetingClass />
        </div>
      </section>
      <h1 className="main-heading">useContext</h1>
      <section className="section white-bg">
        <div>
          <h1 className="heading">new way</h1>
          <Context />
        </div>
        <div>
          <h1 className="heading">old way</h1>
          <ContextClass />
        </div>
      </section>
      <h1 className="main-heading">useEffect</h1>
      <section className="section gainsboro-bg">
        <div>
          <h1 className="heading">new way</h1>
          <Title />
        </div>
        <div>
          <h1 className="heading">old way</h1>
          <TitleClass />
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
