import { customRender } from '../../test-utils/render';
import { Layout } from './Layout';

describe('Layout component', () => {
  it('renders the Outlet component', () => {
    const { getByTestId } = customRender(<Layout />);

    const outletComponent = getByTestId('outlet');
    expect(outletComponent).toBeInTheDocument();
  });

  it('renders main content with proper styles', () => {
    const { getByRole } = customRender(<Layout />);

    const mainElement = getByRole('main');
    expect(mainElement).toHaveClass(
      'flex',
      'flex-col',
      'h-screen',
      'justify-center',
      'items-center',
      'text-center',
      'bg-gray-200',
    );
  });
});
