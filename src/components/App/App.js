import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory';

import user from '../Profile/user.json';
import statisticalData from '../Statistics/statistics-data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
