export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'MAKE_ORDER':
      return [...state, action.order];
    case 'CANCEL_ORDER':
      state = state.filter(item => item.id !== action.id )
      return state
    default:
      return state;
  }
};
