import React, { Fragment, useState, useEffect } from 'react';

export class TitleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bilbo Baggins',
      age: 25,
      width: window.innerWidth,
    };
    this.onHandleNameChange = this.onHandleNameChange.bind(this);
    this.onHandleAgeChange = this.onHandleAgeChange.bind(this);
    this.onHandleResize = this.onHandleResize.bind(this);
  }

  componentDidMount() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
    window.addEventListener('resize', this.onHandleResize);
  }

  componentDidUpdate() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onHandleResize);
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

  onHandleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { name, age, width } = this.state;
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
        <section className="row">
          <span>Width</span>
          <input type="text" value={width} disabled />
        </section>
      </Fragment>
    );
  }
}

export function Title() {
  const [name, setName] = useState('Albus Dumbledore');
  const [age, setAge] = useState(175);
  useEffect(() => {
    document.title = `${name} | ${age}`;
  });
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
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
      <section className="row">
        <span>Height</span>
        <input type="text" value={height} disabled />
      </section>
    </Fragment>
  );
}
