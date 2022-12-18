import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders start button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', { name: /start/i });
  expect(linkElement).toBeInTheDocument();
});
