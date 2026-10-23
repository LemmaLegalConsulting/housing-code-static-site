import React from 'react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import translations from './translations.json';

beforeEach(() => {
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  window.history.replaceState(null, '', '/');
  vi.spyOn(console, 'log').mockImplementation(() => {});
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); });
const showApp = () => render(<HashRouter><App /></HashRouter>);

test('renders the English checklist and bundled logo', async () => {
  showApp();
  await screen.findByRole('heading', { name: "Read about your landlord's responsibilities:" });
  expect(screen.getAllByAltText('Up to Code logo')[0].getAttribute('src')).toBe('/logoWithText.svg');
  expect(document.querySelectorAll('a[href^="#/category/"]').length).toBeGreaterThan(0);
});

test('keeps Spanish navigation working', async () => {
  showApp();
  fireEvent.click(await screen.findByRole('link', { name: 'Español' }));
  await screen.findByRole('heading', { name: translations.es["Read about your landlord's responsibilities"] + ':' });
  expect(window.location.hash).toBe('#/es/');
});

test('opens a checklist category through the hash router', async () => {
  showApp();
  await screen.findByRole('heading', { name: "Read about your landlord's responsibilities:" });
  const link = document.querySelector('a[href^="#/category/"]');
  const href = link.getAttribute('href');
  fireEvent.click(link);
  expect(decodeURI(window.location.hash)).toBe(decodeURI(href));
});
