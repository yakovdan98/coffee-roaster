import React, { Component } from 'react';
import AddBeansForm from './AddBeansForm';
import BeanList from './BeanList';
import BeanDetails from './BeanDetails';

class BeanSelectionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBeanList: [],
      selectedBean: null
    }
  }

  BuyBeans = (id) => {
    console.log(this.state.mainBeanList.filter(item => item.key === id)[0].amount);
    this.state.mainBeanList.filter(item => item.key === id)[0].amount--;
  }

  AddBeans = (newItem) => {
    const newBeanList = this.state.mainBeanList.concat(newItem);
    this.setState({ mainBeanList: newBeanList, selectedBean: newItem });
  }

  render() {
    return (
      <div>
        <AddBeansForm onFormSubmit={this.AddBeans} />
        <BeanList beanList = {this.state.mainBeanList} />
        {this.state.selectedBean !== null && <BeanDetails bean = {this.state.selectedBean} onBuy = {this.BuyBeans} />}
      </div>
    );
  }
}

export default BeanSelectionControl;