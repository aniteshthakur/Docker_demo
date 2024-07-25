import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker is deploed to aws/i);
  expect(linkElement).toBeInTheDocument();
});
