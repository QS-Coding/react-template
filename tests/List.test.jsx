import { render, screen } from '@testing-library/react';
import List from '../components/List';

test('renders List component', () => {
  render(<List />);
  const linkElement = screen.getByText(/List/i);
  expect(linkElement).toBeInTheDocument();
});
