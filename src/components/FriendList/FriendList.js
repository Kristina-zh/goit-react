import React from 'react';
import PropTypes from 'prop-types';
import stl from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={stl.friendList}>
      {friends.map(e => (
        <li key={`${e.id}`} className={stl.item}>
          <span className={e.isOnline ? stl.isOnline : stl.status} />
          <img className={stl.avatar} src={e.avatar} alt="" width="48" />
          <p className={stl.name}>{e.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FriendList;
