import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // expect the background color to be read
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions', () => {
  render(<App />);
  // check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect( colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button first click and desables on second click', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', { namae: 'Disables bbutton' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
})


