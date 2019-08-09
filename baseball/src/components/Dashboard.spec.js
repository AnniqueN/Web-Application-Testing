import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
});