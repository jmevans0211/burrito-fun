import { setOrders, makeOrder } from '../actions';

describe('actions', () => {
  it('should have a type of SET_ORDERS', () => {
   const orders = [
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
  
   const expectedAction = {
     type: 'SET_ORDERS',
     orders,
   }
  
   const result = setOrders(orders);
  
   expect(result).toEqual(expectedAction);
  });

  it('should have a type of MAKE_ORDER', () => {
    const order = {
        id: 1,
        name: 'Floyd',
        ingredients: ['beef', 'chicken', 'lettuce'],
      }
   
    const expectedAction = {
      type: 'MAKE_ORDER',
      order,
    }
   
    const result = makeOrder(order);
   
    expect(result).toEqual(expectedAction);
   });
});







