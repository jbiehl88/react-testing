/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  // TODO: change the expect to actually test something 😉
  render(<button />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const themeButton = screen.getByText(/current theme:/i);
  expect(themeButton).toHaveTextContent(/current theme:\s*light/i);
  fireEvent.click(themeButton);
  expect(themeButton).toHaveTextContent(/current theme:\s*dark/i);
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const themeButton = screen.getByText(/current theme:/i);
  expect(document.body).toHaveStyle('background-color: rgb(255, 255, 255)');
  fireEvent.click(themeButton);
  expect(document.body).toHaveStyle('background-color: rgb(51, 51, 51)');
  fireEvent.click(themeButton);
  expect(document.body).toHaveStyle('background-color: rgb(255, 255, 255)');
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const toggleButton = screen.getByText(/hidden content/i);
  let hiddenContent = screen.queryByText(/this content is hidden by default/i);
  expect(hiddenContent).toBeNull();
  fireEvent.click(toggleButton);
  hiddenContent = screen.queryByText(/hidden content/i);
  expect(hiddenContent).toBeInTheDocument();
  fireEvent.click(toggleButton);
  hiddenContent = screen.queryByText(/this content is hidden by default/i);
  expect(hiddenContent).toBeNull();
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
