import { Component } from 'react';

export class ContactListItem extends Component {
  state = {
    name: this.props.contact.name,
    phone: this.props.contact.phone,
    isEdit: false,
  };

  handleEditContact = () => {
    if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    } else {
      this.setState({ isEdit: false });
      this.props.editContact({
        id: this.props.contact.id,
        name: this.state.name,
        phone: this.state.phone,
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { contact, deleteContact } = this.props;

    return (
      <li key={contact.id}>
        {this.state.isEdit ? (
          <label>
            Name
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
            />
          </label>
        ) : (
          <p>Name: {contact.name}</p>
        )}
        {this.state.isEdit ? (
          <label>
            Phone
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              type="text"
            />
          </label>
        ) : (
          <p>Phone: {contact.phone}</p>
        )}
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={this.handleEditContact}>
          {this.state.isEdit ? 'Save' : 'Edit'}
        </button>
      </li>
    );
  }
}
