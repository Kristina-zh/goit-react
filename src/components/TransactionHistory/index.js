import React from 'react';
import PropTypes from 'prop-types';
import sty from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={sty.transactionHistory}>
    <thead className={sty.head}>
      <tr>
        <th className={sty.col}>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={sty.tbody}>
      {items.map(el => (
        <tr key={`${el.id}`}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: PropTypes.shape({
    id: '',
    type: '',
    amount: 0,
    currency: '',
  }),
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default TransactionHistory;
