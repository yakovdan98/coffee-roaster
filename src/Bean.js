import React from 'react';
import PropTypes from 'prop-types';

const Bean = (props) => {
  return ( 
    <div className='item' onClick={() => props.itemClick(props.key) }>
      <h1>{props.name}</h1>
      <ul>
        <li>{props.price}</li>
        <li>{props.origin}</li>
        <li>{props.roast}</li>
        <li>{props.amount}</li>
      </ul>
    </div>
   );
}
Bean.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  origin: PropTypes.string,
  roast: PropTypes.string,
  amount: PropTypes.number
} 
export default Bean;