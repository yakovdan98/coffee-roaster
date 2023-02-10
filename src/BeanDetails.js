import React from 'react';
import Bean from './Bean';

const BeanDetails = ({ bean, onBuy }) => {
  //console.log(bean.name);
  return (
    <>
      <h1>{bean.name} Details</h1>
      <Bean
        name={bean.name}
        price={bean.price}
        origin={bean.origin}
        roast={bean.roast}
        amount={bean.amount}
      />
      <button onClick={() => onBuy(bean.key)}>Buy</button>
    </>
  );
}

export default BeanDetails;