/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
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

describe('renders the app and tests navigation', () => {
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the default title and path', () => {
    expect(document.title).toBe('Resume | Byron Selvage');
    expect(window.location.pathname).toBe('/');
  });

  it('can navigate to /projects', async () => {
    expect.assertions(3);
    const projectsLink = document.querySelector('a[href="/projects"]');
    expect(projectsLink).toBeInTheDocument();
    await act(async () => {
      projectsLink.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /stats', async () => {
    expect.assertions(5);
    const statsLink = document.querySelector('a[href="/stats"]');
    expect(statsLink).toBeInTheDocument();
    await act(async () => {
      statsLink.click();
    });
    expect(document.title).toContain('Stats |');
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /contact', async () => {
    expect.assertions(3);
    const contactLink = document.querySelector('a[href="/contact"]');
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });

  it('displays 404 for unmatched routes', async () => {
    await act(async () => {
      window.history.pushState({}, '', '/random');
      ReactDOM.createRoot(container).render(<App />);
    });
    expect(document.body.textContent).toContain('Page Not Found Return Home');
    expect(window.location.pathname).toBe('/random');
  });
});
