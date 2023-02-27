import React from 'react';
import Bean from './Bean';

const BeanList = (props) => {
  return (
    < >
      {props.beanList.map((item) =>
        <Bean
          itemClick = {props.itemClick}
          name={item.name}
          price={item.price}
          origin={item.origin}
          roast={item.roast}
          amount={item.amount}
          id = {item.key}
          key={item.key}
          hasItemClick={true}
        />
      )}
    </>

  );
}

export default BeanList;