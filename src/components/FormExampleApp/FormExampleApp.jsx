import { Component } from 'react';
import { Form } from './Form/';

export class FormApp extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}
