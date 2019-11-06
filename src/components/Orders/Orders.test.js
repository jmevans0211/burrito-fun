import React from 'react';
import { shallow } from 'enzyme';
import { setOrders } from '../../actions';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';

describe('Orders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Orders orders = {
      [
        {
          id : 1,
          name : 'Jeannie',
          ingredients : ['lettuce', 'tomato', 'onion']
        }
      ]
    } />);
  });

  it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });


}); //<---- end of ORDERS describe block

describe('mapStateToProps', () => {
  it('should return an object with an orders array', () => {
    const mockState = {
      orders: [
        {
          id: 7,
          name: "Princess Buttercup",
          ingredients: ['salt', 'n', 'peppa']
        },
        {
          id: 8,
          name: "Princess GumDrop",
          ingredients: ['suga', 'n', 'spyce']
        }
      ],
      filter: 'SET_ORDERS'
    };
    const expected = {
      orders: mockState.orders
    }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });


}); // <---- end of mapSTATEtoProps describe block


describe('mapDispatchToProps', () => {
  it('should set orders', () => {
    const mockOrders = [
      {
        id: 7,
        name: "Princess Buttercup",
        ingredients: ['salt', 'n', 'peppa']
      },
      {
        id: 8,
        name: "Princess GumDrop",
        ingredients: ['suga', 'n', 'spyce']
      }
    ]
    const mockDispatch = jest.fn();
    const actionToDispatch = setOrders('SET_ORDERS', mockOrders);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setOrders('SET_ORDERS', mockOrders);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

}); //<<--- end of mapDISPATCHtoPRops describe block