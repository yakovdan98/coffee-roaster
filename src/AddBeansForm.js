import React from 'react';
import { v4 } from 'uuid';
const AddBeansForm = (props) => {  

  function handleAddBeans(e){
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
      <input
        type='text'
        name='name'
        placeholder='Name' />
      <input
        type='text'
        name='origin'
        placeholder='Origin' />
      <input
        type='number'
        name='price'
        placeholder='Price' />
      <input
        type='text'
        name='roast'
        placeholder='Light/Medium/Dark' />
        <button type='submit'>Submit</button>
        </form>
    </div>
   );
}
 
export default AddBeansForm;