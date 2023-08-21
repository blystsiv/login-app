import { customRender, fireEvent } from '../../test-utils/render';
import { Home } from './Home';

describe('Home', () => {
  test('renders a greeting with the username', async () => {
    const username = 'JohnDoe';
    localStorage.setItem('loginedUser', JSON.stringify({ username }));

    const { getByText } = customRender(<Home />);

    expect(getByText(`Hi, ${username}!`)).toBeInTheDocument();
  });

  test('logs out when logout button is clicked', async () => {
    const username = 'JohnDoe';
    localStorage.setItem('loginedUser', JSON.stringify({ username }));

    const { getByText } = customRender(<Home />);
    fireEvent.click(getByText('Logout'));

    expect(localStorage.getItem('loginedUser')).toBeNull();
    // You might need to use your navigation mechanism here.
  });

  test('redirects to login when user is not logged in', async () => {
    localStorage.removeItem('loginedUser');

    customRender(<Home />);
    // Check if the navigation behavior occurs as expected.
    // You might need to use your navigation mechanism here.
  });
});
