import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../LoginPage';

vi.mock('../../api');

describe('Login page', () => {
  it('should show an error with incorrect password', async () => {
    renderComponent();

    await userEvent.type(screen.getByLabelText('Email'), 'ted.mosby@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'wrong password');
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(await screen.findByText('Invalid email or password')).toBeInTheDocument();
  });

  it('should navigate to the Dashboard page', async () => {
    renderComponent();
    await userEvent.type(screen.getByLabelText('Email'), 'ted.mosby@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');

    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(await screen.findByText('Dashboard')).toBeInTheDocument();
  });
});

const renderComponent = () => {
  return render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<div>Dashboard</div>} />
      </Routes>
    </MemoryRouter>,
  );
};
