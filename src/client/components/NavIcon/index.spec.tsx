import React from 'react';
import {render} from '@testing-library/react';
import NavIcon from '.';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('connected-react-router', () => ({
  push: jest.fn(),
}));

describe('NavIcon component', () => {
  jest.mock('../../styles/_variables.scss');
  const baseComponent = (
    <NavIcon
      icon={<FontAwesomeIcon icon={faCoffee} />}
      text='test text'
      redirectUrl='/home'
      key={0}
    />
  );

  it('should render the icon and text props passed', () => {
    const {getByText} = render(baseComponent);

    expect(getByText('test text')).toBeInTheDocument();
  });
});
