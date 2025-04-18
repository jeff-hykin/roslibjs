import { render, screen } from 'npm:@testing-library/react'
import App from './App'
import React from 'npm:react';
import { expect, test } from 'npm:vitest';

test('renders learn react link', () => {
  render(<App />)
  expect(screen.getByText(/Send a message to turtle/i)).toBeTruthy();
})
