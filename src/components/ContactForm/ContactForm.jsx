import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  telInputId = nanoid();

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name: name.trim(), number: number.trim() });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          id={this.nameInputId}
          placeholder="Vasyl Pupkin"
          type="text"
          name="name"
          value={name}
          onChange={this.inputHandler}
          required
        />
        <Label htmlFor={this.telInputId}>Number</Label>
        <Input
          id={this.telInputId}
          placeholder="999111999"
          type="tel"
          name="number"
          value={number}
          onChange={this.inputHandler}
          required
        />
        <Button type="submit" disabled={!(name && number)}>
          Add contact
        </Button>
      </Form>
    );
  }
}
