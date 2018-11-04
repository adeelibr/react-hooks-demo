import React, { Fragment, useState, useContext } from 'react';
// Context
import { ThemeContext, LocaleContext } from '../context';

export class ContextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bilbo Baggins',
      age: 25,
    };
    this.onHandleNameChange = this.onHandleNameChange.bind(this);
    this.onHandleAgeChange = this.onHandleAgeChange.bind(this);
  }

  onHandleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onHandleAgeChange(e) {
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    const { name, age } = this.state;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Fragment>
            <section className={`row ${theme.dark}`}>
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={this.onHandleNameChange}
              />
            </section>
            <section className={`row ${theme.light}`}>
              <span>Age</span>
              <input
                type="text"
                value={age}
                onChange={this.onHandleAgeChange}
              />
            </section>
            <LocaleContext.Consumer>
              {({ locale }) => (
                <section className={`row ${theme.dark}`}>
                  <span>Locale</span>
                  <input type="text" value={locale.local} disabled />
                </section>
              )}
            </LocaleContext.Consumer>
          </Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export function Context() {
  const [name, setName] = useState('Albus Dumbledore');
  const [age, setAge] = useState(175);
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  return (
    <Fragment>
      <section className={`row ${theme.light}`}>
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className={`row ${theme.dark}`}>
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
      <section className={`row ${theme.light}`}>
        <span>Age</span>
        <input type="text" value={locale.foreign} disabled />
      </section>
    </Fragment>
  );
}
