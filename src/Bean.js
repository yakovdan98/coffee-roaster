import React from 'react';
import PropTypes from 'prop-types';

const Bean = (props) => {
  return ( 
    <div className='item' onClick={() => props.itemClick(props.id) }>
      <h1>{props.name}</h1>
      <ul>
        <li>Price: ${props.price}</li>
        <li>Origin: {props.origin}</li>
        <li>Roast: {props.roast}</li>
        <li>Amount Left: {props.amount}</li>
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