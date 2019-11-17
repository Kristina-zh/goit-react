import React from 'react';
import PropTypes from 'prop-types';
import st from './Statistics.module.css';

function randColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistics = ({ title, stats }) => (
  <section className={st.statistics}>
    {title !== '' && <h2 className={st.title}>{title}</h2>}

    <ul className={st.statList}>
      {stats.map(el => (
        <li
          key={`${el.id}`}
          style={{ backgroundColor: randColor() }}
          className={st.item}
        >
          <span className={st.label}>{el.label}</span>
          <span className={st.percentage}>{el.percentage + '%'}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
