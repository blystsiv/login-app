import { customRender, fireEvent, screen } from '../../test-utils/render';
import { Login } from './Login';

describe('Login', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders the login form correctly', () => {
    customRender(<Login />);

    expect(screen.getByTestId('welcome-heading')).toBeInTheDocument();
    expect(screen.getByTestId('login-text')).toBeInTheDocument();
  });

  test('displays error message for missing username or email', async () => {
    customRender(<Login />);

    fireEvent.click(screen.getByText('Sign In'));

    expect(await screen.findByText('Username or email is required')).toBeInTheDocument();
  });
  test('displays error message for short username or email', async () => {
    customRender(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Username or email'), {
      target: { value: 'abc' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    expect(
      await screen.findByText('Username or email must be at least 5 chars'),
    ).toBeInTheDocument();
  });

  test('displays error message for missing password', async () => {
    customRender(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Username or email'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  test('displays error message for short password', async () => {
    customRender(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Username or email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'abc' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    expect(
      await screen.findByText('Password must be at least 8 chars'),
    ).toBeInTheDocument();
  });

  test('displays error message for incorrect username or email', async () => {
    customRender(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Username or email'), {
      target: { value: 'nonexistent@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'Test1234' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    expect(await screen.getByTestId('username-input')).toBeInTheDocument();
  });

  test('displays error message for incorrect password', async () => {
    const registeredUsers = [
      { username: 'testuser', email: 'test@example.com', password: 'Test1234' },
    ];
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    customRender(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Username or email'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'WrongPassword' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    expect(await screen.findByText('Incorrect password')).toBeInTheDocument();
  });

  test('successfully logs in a user with correct credentials', async () => {
    const registeredUsers = [
      { username: 'testuser', email: 'test@example.com', password: 'Test1234' },
    ];
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    customRender(<Login />);

    fireEvent.change(screen.getByPlaceholderText('Username or email'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'Test1234' },
    });

    fireEvent.click(screen.getByText('Sign In'));
  });

  test('redirects to signup page when "Sign up here" link is clicked', () => {
    customRender(<Login />);

    fireEvent.click(screen.getByTestId('signup-link'));
  });
});
