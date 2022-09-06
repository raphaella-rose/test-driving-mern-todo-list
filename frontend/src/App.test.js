import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
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

test('when task is added it appears on screen', () => {
  render(<App />);
  const formInput = screen.getByTestId("form-input");
  const formSubmit = screen.getByTestId("form-submit");
  const taskElement = screen.getByTestId("task-element");
  fireEvent.change(formInput, {target: {value: "test"}});
  fireEvent.click(formSubmit);
  expect(taskElement).toHaveTextContent("test");
})
