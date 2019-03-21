import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      subject: "",
      phoneNumber: "",
      items: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      subject: this.state.subject,
      phoneNumber: this.state.phoneNumber
    });

    this.setState({
      items,
      name: "",
      subject: "",
      phoneNumber: ""
    });
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newName={this.state.name}
          newSubject={this.state.subject}
          newNumber={this.state.phoneNumber}
        />
        <Table items={this.state.items} />
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Ім'я, Прізвище</th>
              <th>предмет</th>
              <th>номер</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.subject}</td>
                  <td>{item.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Teacher App</h3>
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="name">
            Ім'я та прізвище:
            <input
              id="name"
              value={this.props.newName}
              type="text"
              name="name"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label for="subject">
            Предмет:
            <input
              id="subject"
              value={this.props.newSubject}
              type="subject"
              name="subject"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label for="phoneNumber">
            Номер телефону:
            <input
              id="phoneNumber"
              value={this.props.newNumber}
              type="phoneNumber"
              name="phoneNumber"
              onChange={this.props.handleInputChange}
            />
          </label>
          <button type="submit" value="Submit">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default App;
