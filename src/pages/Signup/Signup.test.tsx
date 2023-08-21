import { customRender, fireEvent, screen } from '../../test-utils/render';
import { Signup } from './Signup';

describe('Signup', () => {
  test('displays error message for missing fields', async () => {
    customRender(<Signup />);

    fireEvent.click(screen.getByText('Sign up'));

    expect(await screen.findByText('Username is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Password required')).toBeInTheDocument();
  });

  test('displays error message for short password', async () => {
    customRender(<Signup />);

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'abc' },
    });
    fireEvent.click(screen.getByText('Sign up'));

    expect(await screen.findByText('Min 8 chars')).toBeInTheDocument();
  });

  test('redirects to login page if user already exists', async () => {
    localStorage.setItem(
      'registeredUsers',
      JSON.stringify([{ username: 'johnDoe', email: 'john@example.com' }]),
    );
    customRender(<Signup />);

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'johnDoe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.click(screen.getByText('Sign up'));
  });
});
