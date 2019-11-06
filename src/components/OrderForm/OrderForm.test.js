import React from 'react';
import { shallow } from 'enzyme';
import { makeOrder } from '../../actions';
import { OrderForm, mapStateToProps, mapDispatchToProps } from './OrderForm';

describe('OrderForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OrderForm  />);
  });

  it('should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleNameChange is called', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Jeannie'
      }
    }
    const expected = 'Jeannie'

    wrapper.instance().handleNameChange(mockEvent)

    expect(wrapper.state('name')).toEqual(expected)
  });

  it.skip('should call handleIngredients when clicked', () => {
    wrapper.instance().handleIngredients = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('button').at(0).simulate('click', mockEvent);

    expect(wrapper.instance().handleIngredients).toHaveBeenCalledWith(mockEvent);
  });
});

describe('mapStateToProps', () => {
  it('should return an object of orders array', () => {
    const mockState = {
      orders: [
        {
          id: 7,
          name: "Prince CrackerJack",
          ingredients: ['caramel', 'n', 'popcorn']
        },
        {
          id: 8,
          name: "Prince HOHO",
          ingredients: ['chocolate', 'n', 'cream']
        }
      ],
      filter: 'SET_ORDER'
    };
    const expected = {
      orders: mockState.orders
    }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
});

describe('mapDispatchToProps', () => {
  it('should make an orders', () => {
    const mockOrder =
      {
        id: 3,
        name: "Sir Balloon face",
        ingredients: ['nothing', 'sharp', 'please']
      }
    const mockDispatch = jest.fn();
    const actionToDispatch = makeOrder('MAKE_ORDER', mockOrder);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.makeOrder('MAKE_ORDER', mockOrder);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
}); 