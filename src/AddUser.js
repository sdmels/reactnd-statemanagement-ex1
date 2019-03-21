import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    userExists: false,
  }

  contactExists = currUsername => {
    const users = this.props.users;

    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };

  handleSubmit = event => {
    event.preventDefault();
    const userExists = this.contactExists(this.state.user.username);

    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }

    this.setState(() => ({
      userExists,
    }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState( currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value
      },
    }));
  }

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === '' || lastName === '' || username === '';
  }

  render() {
    const { firstName, lastName, username } = this.state.user;
    return (
      <div>
        <h2>New User</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.handleInputChange}
            />
            </div>
            <button disabled={this.isDisabled()}>Add</button>
          </form>
          {this.state.userExists ? (
          <p className="error">You cannot add a user that already exists.</p>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

AddUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired
}

export default AddUser;