import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';
import './Orders.css';

export class Orders extends Component {
  constructor() {
    super();
    this.state = {

    }

  }
  componentDidMount() {
    console.log('*****', this.props)
    const {setOrders} = this.props
    getOrders()
    .then(data => setOrders(data.orders))
    .catch(err => console.error('Error fetching:', err));
  }
  
  
  render() {
    const {orders} = this.props
    console.log('***', orders)
    const orderEls = orders.map(order => {
      return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    });
    return (
      <section>
        { orderEls.length ? orderEls : <p>No orders yet!</p> }
      </section>
    )
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);