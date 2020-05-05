import React from 'react';
import PropTypes from 'prop-types';
import './price.scss';

const DisplayPrice = ({ price, currency, daymonth }) => {
  return (
    <div className="displayprice_wrap">
      <h2>Total Price</h2>
      <div className="displayprice">{currency}{price} per {daymonth}</div>
    </div>
  );
}

DisplayPrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  daymonth: PropTypes.string.isRequired,
};

export default React.memo(DisplayPrice);
