import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button component', () => {
  it('renders primary button correctly', () => {
    render(<Button type="primary">Click Me</Button>);
    const buttonElement = screen.getByRole('button');

    // Test button text content
    expect(buttonElement.textContent).toBe('Click Me');

    // Test button styles
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded',
    );
    expect(buttonElement).not.toHaveClass('bg-purple-200 cursor-not-allowed opacity-50');
  });

  it('renders a disabled close button correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onClickMock = () => {}; // A simple mock function
    render(
      <Button type="close" disabled onClick={onClickMock}>
        Close
      </Button>,
    );
    const buttonElement = screen.getByRole('button');

    // Test button text content
    expect(buttonElement.textContent).toBe('Close');

    // Test button styles
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded',
    );
    expect(buttonElement).toHaveClass('cursor-not-allowed opacity-50');
  });
});
