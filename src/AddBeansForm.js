const AddBeansForm = (props) => {

  function handleAddBeans(e){
    props.onFormSubmit({
      
      name: 
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