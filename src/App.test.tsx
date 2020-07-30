import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders search input', () => {
  const { getByPlaceholderText } = render(<App />)

  const input = getByPlaceholderText('Search for user')
  expect(input).toBeInTheDocument()
})

test('renders search button', () => {
  const { getByText } = render(<App />)

  const button = getByText(/Search/i)
  expect(button).toBeInTheDocument()
})
