import React from 'react';
import { v4 } from 'uuid';
const AddBeansForm = (props) => {

  function handleAddBeans(e) {
    e.preventDefault();
    props.onFormSubmit({
      key: v4(),
      name: e.target.name.value,
      origin: e.target.origin.value,
      price: parseInt(e.target.price.value),
      roast: e.target.roast.value,
      amount: 130
    });
  }


  return (
    <div>
      <form onSubmit={handleAddBeans}>
        <label htmlFor="name" >Name</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Name' /><br />
          <label htmlFor="origin" >Origin</label>
        <input
          id='origin'
          type='text'
          name='origin'
          placeholder='Origin' /><br />
          <label htmlFor="price" >Price</label>
        <input
          id='price'
          type='number'
          name='price'
          placeholder='Price' /><br />
          <label htmlFor="roast" >Roast</label>
        <input
          id='roast'
          type='text'
          name='roast'
          placeholder='Light/Medium/Dark' /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddBeansForm;