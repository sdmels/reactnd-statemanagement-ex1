import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  return(
    <li className="user">
      <p>{props.user.username}</p>
      <p>Number of Games played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    </li>
  );
}

List.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

export default List;