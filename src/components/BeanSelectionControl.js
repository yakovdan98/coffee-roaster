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
    this.setState({
      mainBeanList: this.state.mainBeanList
    });
  }

  AddBeans = (newItem) => {
    const newBeanList = this.state.mainBeanList.concat(newItem);
    this.setState({ mainBeanList: newBeanList});
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
        <div className='section'>
          <BeanList itemClick = {this.BeanSelection} beanList={this.state.mainBeanList} />
        </div>
        <div className='details'>
          {this.state.selectedBean !== null && <BeanDetails bean={this.state.selectedBean} onBuy={this.BuyBeans} />}

        </div>
      </>
    );
  }
}

export default BeanSelectionControl;