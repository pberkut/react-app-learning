import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    username: '',
    number: '',
    experience: 'junior',
    agree: false,
  };

  usernameInputId = nanoid(4);
  numberInputId = nanoid(4);

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //   console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  handleAgreeChange = e => {
    this.setState({ agree: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      username: '',
      number: '',
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor={this.usernameInputId}>Name</label>
        <input
          id={this.usernameInputId}
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label htmlFor={this.numberInputId}>Number</label>
        <input
          id={this.numberInputId}
          type="text"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        />

        <p>Your level: </p>

        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <p>Checkbox</p>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleAgreeChange}
          />{' '}
          agree with rules
        </label>

        <button
          type="submit"
          disabled={!this.state.agree}
          style={{ marginTop: '16px' }}
        >
          Send
        </button>
      </form>
    );
  }
}
