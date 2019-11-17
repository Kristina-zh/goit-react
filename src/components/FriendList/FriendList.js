import React from 'react';
import PropTypes from 'prop-types';
import stl from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={stl.friendList}>
    {friends.map(e => (
      <li key={`${e.id}`} className={stl.item}>
        <span className={stl.status}></span>
        <img className={stl.avatar} src={e.avatar} alt="" width="48" />
        <p className={stl.name}>{e.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  friends: PropTypes.shape({
    id: '',
    name: '',
    isOnline: false,
    id: '',
  }),
};

FriendList.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
  }),
};

export default FriendList;
