import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from '../Dashboard';
import { describe, it, expect, vi } from 'vitest';
import { fetchSubscriptions } from '../../api';
import { mockData } from './mockData';

vi.mock('../../api');

describe('Dashboard', () => {
  it('should match snapshot', async () => {
    vi.mocked(fetchSubscriptions).mockResolvedValue(mockData);
    const { container } = renderComponent();

    await screen.findByText('Showing 3 of 3');

    expect(container).toMatchSnapshot();
  });

  it('should show 1 expired product after applying status filter', async () => {
    vi.mocked(fetchSubscriptions).mockResolvedValue(mockData);
    renderComponent();
    await screen.findByText('Showing 3 of 3');

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.getByText('Product C')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Expired'));

    await screen.findByText('Showing 1 of 3');
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.queryByText('Product A')).not.toBeInTheDocument();
    expect(screen.queryByText('Product C')).not.toBeInTheDocument();
  });

  it('should an error message', async () => {
    vi.mocked(fetchSubscriptions).mockRejectedValue(new Error('test'));
    renderComponent();

    expect(await screen.findByText('Error while fetching data')).toBeInTheDocument();
  });
});

const renderComponent = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

  return render(
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>,
  );
};
