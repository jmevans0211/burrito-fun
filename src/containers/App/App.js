import React from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setOrders } from '../../actions';
// import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () =>  {
      return (
        <main className="App">
          <header>
            <h1>Burrito Builder</h1>
            <OrderForm />
          </header>
          
          <Orders />
        </main>
      );
    }




export default App;

