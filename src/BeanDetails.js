import React from 'react';
import Bean from './Bean';

const BeanDetails = ({ bean }) => {
  return (
    <div>
      <h1>{bean.name} Details</h1>
      <Bean
        name={bean.name}
        price={bean.price}
        origin={bean.roast}
        roast={bean.roast}
        amount={bean.amount}
      />
    </div>
  );
}

export default BeanDetails;