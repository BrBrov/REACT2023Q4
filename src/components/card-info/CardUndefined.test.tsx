import { render, screen, fireEvent } from '@testing-library/react';
import CardUndefined from './CardUndefined';
import { vi } from 'vitest';

describe('CardUndefined Component', () => {
  it('renders the component with the correct content', () => {
    render(<CardUndefined prop={() => {}} />);

    const closeButton = screen.getByAltText('Close card');
    const beerNameElement = screen.getByText(
      /Card was not found on the page./i
    );

    expect(closeButton).toBeInTheDocument();
    expect(beerNameElement).toBeInTheDocument();
  });

  it('calls the prop function when the close button is clicked', () => {
    const mockPropFunction = vi.fn();
    render(<CardUndefined prop={mockPropFunction} />);

    const closeButton = screen.getByAltText('Close card');
    fireEvent.click(closeButton);

    expect(mockPropFunction).toHaveBeenCalledTimes(1);
  });
});
