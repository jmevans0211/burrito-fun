export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'MAKE_ORDER':
      return [...state, action.order];
    case 'DELETE_ORDER':
      
      return state
    default:
      return state;
  }
};
