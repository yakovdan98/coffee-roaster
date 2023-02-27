import React, { Component } from 'react';
import AddBeansForm from './AddBeansForm';
import BeanList from './BeanList';
import BeanDetails from './BeanDetails';

class BeanSelectionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBeanList: [],
      selectedBean: null,
      showError: false
    }
  }

  BuyBeans = (id) => {
    this.state.mainBeanList.filter(item => item.key === id)[0].amount--;
    this.setState({
      mainBeanList: this.state.mainBeanList
    });
  }

  AddBeans = (newItem) => {
    if(newItem.name === "" || newItem.origin === "" || newItem.price < 0 || isNaN(newItem.price) || newItem.roast === ""){
      this.setState({
        showError: true
      });
    } else {
      const newBeanList = this.state.mainBeanList.concat(newItem);
      this.setState({ 
        mainBeanList: newBeanList,
        showError: false
      });
    }
  }

  EditBeans = (editItem) => {
    console.log(editItem)
    const beanToEdit = this.state.mainBeanList.filter(item => item.key === editItem.key)[0];
    console.log(beanToEdit);
    beanToEdit.name = editItem.name;
    beanToEdit.origin = editItem.origin;
    beanToEdit.price = editItem.price;
    beanToEdit.roast = editItem.roast;

    // const editedBeans = this.state.mainBeanList.filter(item => item.key !== this.state.selectedBean.key).concat(editItem);
    this.setState({
      mainBeanList: this.state.mainBeanList,
      selectedBean: null
    });
  }

  BeanSelection = (id) => {
    const newSelectedBean = this.state.mainBeanList.filter(item => item.key === id)[0];
    this.setState({
      selectedBean : newSelectedBean
    })
  }

  render() {
    return (
      <>
        <AddBeansForm onFormSubmit={this.AddBeans} />
        {this.state.showError && 
          <h1>Error, fill all the fields</h1>
        }
        <div className='section'>
          <BeanList itemClick = {this.BeanSelection} beanList={this.state.mainBeanList} />
        </div>
        <div className='details'>
          {this.state.selectedBean !== null && <BeanDetails onEdit={this.EditBeans} bean={this.state.selectedBean} onBuy={this.BuyBeans} />}
        </div>
      </>
    );
  }
}

export default BeanSelectionControl;