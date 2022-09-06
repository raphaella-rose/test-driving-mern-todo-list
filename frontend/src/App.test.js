import { render, screen } from '@testing-library/react';
import App from './App';

test('title is on screen', () => {
  render(<App />);
  const titleElement = screen.getByText("Todo List");
  expect(titleElement).toBeInTheDocument();
});

test('form is on screen', () => {
  render(<App />);
  const formElement = screen.getByTestId("form-element");
  const taskInputElement = screen.getByTestId("form-input");
  const taskSubmitElement = screen.getByTestId("form-submit");
  expect(formElement).toBeInTheDocument();
  expect(taskSubmitElement).toBeInTheDocument();
  expect(taskInputElement).toBeInTheDocument();
})
