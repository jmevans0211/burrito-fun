import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';
import { getOrders, deleteOrder } from '../../apiCalls';
import './Orders.css';

export class Orders extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    const {setOrders} = this.props
    getOrders()
    .then(data => setOrders(data.orders))
    .catch(err => console.error('Error fetching:', err));
  }
  
handleDelete(e) {
  const id = e.target.id
  deleteOrder(id)
}

  render() {
    const {orders} = this.props
    const orderEls = orders.map(order => {
      return (
        <div key={order.id} className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li key={ingredient}>{ingredient}</li>
            })}
          </ul>
          <button id={order.id} type="button" onClick={(e) => this.handleDelete(e)}>Delete Order</button>
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