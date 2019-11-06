import {orders} from './orders';

describe('orders', () => {

  it('should add orders', () => {
    const mockOrders = [
      {
        id: 1,
        name: 'Floyd',
        ingredients: ['beef', 'chicken', 'lettuce'],
      },
      {
       id: 2,
       name: 'BamBam',
       ingredients: ['rocks', 'dino nuggets'],
      },
    ];
 
    const initialState = [];
    const action = {
      type: 'SET_ORDERS',
      orders: mockOrders,
    };
 
    const newState = mockOrders
 
    const result = orders(initialState, action);
 
    expect(result).toEqual(newState);
  });

  it('should add an order', () => {
    const mockOrders = [
      {
        id: 1,
        name: 'Floyd',
        ingredients: ['beef', 'chicken', 'lettuce'],
      },
      {
       id: 2,
       name: 'BamBam',
       ingredients: ['rocks', 'dino nuggets'],
      },
    ];

    const mockNewOrder = { id: 3, name: 'Jennifer', ingredients: ['eggwhites', 'lettuce']}
 
    const initialState = mockOrders;
    const action = {
      type: 'MAKE_ORDER',
      order: mockNewOrder,
    };
 
    const newState = [
      {
        id: 1,
        name: 'Floyd',
        ingredients: ['beef', 'chicken', 'lettuce'],
      },
      {
       id: 2,
       name: 'BamBam',
       ingredients: ['rocks', 'dino nuggets'],
      },
      { 
        id: 3, 
        name: 'Jennifer', 
        ingredients: ['eggwhites', 'lettuce']
      },
    ]
 
    const result = orders(initialState, action);
 
    expect(result).toEqual(newState);
  });

});