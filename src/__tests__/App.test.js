/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mocks the fetch API used on the stats page and the about page.
const jsonMock = jest.fn(() => Promise.resolve({}));
const textMock = jest.fn(() => Promise.resolve(''));
global.fetch = jest.fn(() => Promise.resolve({
  json: jsonMock,
  text: textMock,
}));

// Mocks the scrollTo API used when navigating to a new page.
window.scrollTo = jest.fn();

// Mock all lazy-loaded components
jest.mock('../pages/Contact', () => () => <div>Contact Page</div>);
jest.mock('../pages/NotFound', () => () => <div>Page Not Found</div>);
jest.mock('../pages/Projects', () => () => <div>Projects Page</div>);
jest.mock('../pages/Resume', () => () => <div>Resume Page</div>);
jest.mock('../pages/Stats', () => () => <div>Stats Page</div>);

describe('App component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  it('renders the default route (Resume)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Resume Page')).toBeInTheDocument();
  });

  it('renders Projects page', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Projects Page')).toBeInTheDocument();
  });

  it('renders Stats page', () => {
    render(
      <MemoryRouter initialEntries={['/stats']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Stats Page')).toBeInTheDocument();
  });

  it('renders Contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Contact Page')).toBeInTheDocument();
  });

  it('renders NotFound for unmatched routes', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
