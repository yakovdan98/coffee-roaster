import React, { useState } from 'react';
import AddBeansForm from './AddBeansForm';
import Bean from './Bean';

const BeanDetails = ({onEdit, bean, onBuy }) => {
  const [editForm, setEditForm] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleEdit(e) {
    if(e.name === "" || e.origin === "" || e.price < 0 || isNaN(e.price) || e.roast === "")
    {
      setShowError(true);
    } else {
      e.amount = bean.amount;
      e.key = bean.key;
      onEdit(e);
      setShowError(false);
      setEditForm(false);
    }
  }

  return (
    <>
      <h1>{bean.name} Details</h1>
      <Bean
        name={bean.name}
        price={bean.price}
        origin={bean.origin}
        roast={bean.roast}
        amount={bean.amount}
        hasItemClick={false}
      />
      {bean.amount > 0 &&
        <button onClick={() => onBuy(bean.key)}>Buy</button>
      }
      <button onClick={() => setEditForm(true)}>Edit</button>
      {editForm && 
        <AddBeansForm onFormSubmit= {handleEdit} />
      }
      {showError && 
        <h1>Error, enter all fields</h1>
      }
    </>
  );
}

export default BeanDetails;