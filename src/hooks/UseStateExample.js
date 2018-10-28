import React, { Fragment, useState } from 'react';

export class GreetingClass extends React.Component {
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
      <Fragment>
        <section className="row">
          <span>Name</span>
          <input type="text" value={name} onChange={this.onHandleNameChange} />
        </section>
        <section className="row">
          <span>Age</span>
          <input type="text" value={age} onChange={this.onHandleAgeChange} />
        </section>
      </Fragment>
    );
  }
}

export function Greeting() {
  const [name, setName] = useState('Albus Dumbledore');
  const [age, setAge] = useState(175);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  return (
    <Fragment>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
    </Fragment>
  );
}
