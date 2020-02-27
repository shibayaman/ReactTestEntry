import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from 'axios';

import App from '../App';

afterEach(cleanup);

jest.mock('axios');
axios.get.mockResolvedValue({
  data: { 
    todo: [
      { id: 0, task: '寝る', due: '今すぐ', priority: 'とても高い' },
      { id: 1, task: '起きる', due: '10年後', priority: '地より低い' },
    ]
  }
});

axios.post.mockImplementation(
  (_, todo) => {
    console.log(Object.assign({}, todo, { id: 3 }));
    return Promise.resolve({ data: Object.assign({}, todo, { id: 3 }) })
  }
);

axios.delete.mockResolvedValue('dummy');

describe('rendering App', () => {
  it('should render with fetched data', async () => {
    const { container } = render(<App />);
    await wait(() => expect(container.textContent).toContain('寝る'));
    expect(container.textContent).toContain('起きる');
  });
});

describe('integration test', () => {
  it('should render with fetched data', async () => {
    const { getAllByText, getByText, getByLabelText, container } = render(<App />);
    await wait(() => expect(container.textContent).toContain('寝る'));
  
    fireEvent.change(getByLabelText('やること'), { target: { value: '食べる' } });
    fireEvent.change(getByLabelText('期限'), { target: { value: '5秒後' } });
    fireEvent.change(getByLabelText('優先度'), { target: { value: '命より大事' } });
    fireEvent.click(getByText('Add'));
    await wait(() => expect(container.textContent).toContain('食べる'));
    
    fireEvent.click(getAllByText('Done')[0]);
    await wait(() => {
      fireEvent.animationEnd(getByText('食べる'));
      expect(container.textContent).not.toContain('食べる');
    });
  });
});