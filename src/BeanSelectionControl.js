import React, { Component } from 'react';
import AddBeansForm from './AddBeansForm';

class BeanSelectionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beanList: []
    }
  }

  AddBeans = (newItem) => {
    const newBeanList = this.state.beanList.concat(newItem);
    this.setState({ beanList: newBeanList });
  }

  render() {
    return (
      <div>
        <AddBeansForm onFormSubmit={this.AddBeans} />
        {this.state.beanList.map((bean) =>
          <ul>
            <li>{bean.name}</li>
            <li>bean.origin</li>

          </ul>

        )}
      </div>
    );
  }
}

export default BeanSelectionControl;