import { queries, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

// re-export everything from library
export * from '@testing-library/react';

export const customRender = (ui: ReactElement, options?: object) =>
  render(ui, { wrapper: AllTheProviders, queries, ...options });
