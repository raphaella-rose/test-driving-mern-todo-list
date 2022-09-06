import { render, screen } from '@testing-library/react';
import App from './App';

test('title is on screen', () => {
  render(<App />);
  const titleElement = screen.getByText("Todo List");
  expect(titleElement).toBeInTheDocument();
});
