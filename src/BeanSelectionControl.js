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

  AddBeans = (newItem) => {
    const newBeanList = this.state.mainBeanList.concat(newItem);
    this.setState({ mainBeanList: newBeanList, selectedBean: newItem });
  }

  render() {
    return (
      <div>
        <AddBeansForm onFormSubmit={this.AddBeans} />
        <BeanList beanList = {this.state.mainBeanList} />
        <BeanDetails bean = {this.state.selectedBean} />
      </div>
    );
  }
}

export default BeanSelectionControl;