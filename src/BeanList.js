import React from 'react';
import Bean from './Bean';

const BeanList = (props) => {
  return (
    <div>
      <hr />
      {props.beanList.map((item) =>
        <Bean
          name={item.name}
          price={item.price}
          origin={item.origin}
          roast={item.roast}
          amount={item.amount}
          key={item.key}
        />
      )}
    </div>

  );
}

export default BeanList;