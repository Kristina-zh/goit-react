import React from 'react';
import PropTypes from 'prop-types';
import stl from './FriendList.module.css';

const FriendList = ({ friends }) => {
  // const spanClasses = friends.isOnline === true ? stl.isOnline : stl.status;

  // if (friends.isOnline) {
  //   spanClasses.push(stl.isOnline);
  // }

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

FriendList.defaultProps = {
  friends: PropTypes.shape({
    id: '',
    name: '',
    isOnline: false,
    avatar: '',
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
