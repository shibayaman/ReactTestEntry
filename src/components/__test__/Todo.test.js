import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import Todo from '../Todo';

expect.extend({ toBeInTheDocument });
afterEach(cleanup);

describe('rendering Todo Component', () => {
  it('should render into document', () => {
    const aVeryVeryImportantTask = 'go to bed'
    render(<Todo task={aVeryVeryImportantTask}/>);
    expect(screen.getByText(aVeryVeryImportantTask)).toBeInTheDocument();
  });
});
