import { afterEach } from 'vitest';

import { customRender, fireEvent, screen } from '../../test-utils/render';
import { NotFound } from './NotFount';

describe('NotFound', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('should have text 404', () => {
    customRender(<NotFound />);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
    expect(
      screen.getByText('The page you are looking for does not exist.'),
    ).toBeInTheDocument();
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
  });

  test('should have text "Go to Home" if there is a logged in user', () => {
    localStorage.setItem('loginedUser', 'Liliia');
    customRender(<NotFound />);

    expect(screen.getByText('Go to Home')).toBeInTheDocument();
  });

  test('should have text "Go to Login" if there is no logged in user', () => {
    customRender(<NotFound />);

    expect(screen.getByText('Go to Login')).toBeInTheDocument();
  });

  test('on click on button should navigate to login page', () => {
    localStorage.clear();
    expect(location.pathname).toBe('/');
    customRender(<NotFound />);

    const btn = screen.getByTestId('not-found-button');

    expect(screen.getByTestId('not-found-button')).toBeInTheDocument();

    fireEvent.click(btn);
    expect(location.pathname).toBe('/login');
  });
});
