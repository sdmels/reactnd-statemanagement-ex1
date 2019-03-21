import React, { Component } from 'react';
import propTypes from 'prop-types';
import List from './List';

class ListUser extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };

  render() {
    const { users } = this.props;
    const { showGamesPlayed } = this.state;

    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );

    return (
      <div>
        <h1>Users</h1>
        {users && users.length > 0 ? gamesPlayedButton : ''}
        <ol>
          {users.map( user => (
            <List key={user.username} user={user} showGamesPlayed={showGamesPlayed}/>
          ))}
        </ol>
      </div>
    );
  }
}

ListUser.propTypes = {
  users: propTypes.array.isRequired
}

export default ListUser;