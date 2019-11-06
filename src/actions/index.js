export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const makeOrder = order => ({
  type: 'MAKE_ORDER',
  order,
});

export const deleteOrder = id => ({
  type: 'DELETE_ORDER',
  id
});