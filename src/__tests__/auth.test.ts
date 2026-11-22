import { describe, it, expect, vi } from 'vitest';
import { DEMO_USER, getUser, isLoggedIn, login, logout } from '../auth';

vi.mock('../../api');

const { email, name, password = '' } = DEMO_USER;

describe('auth', () => {
  it('should reject incorrect credentials', async () => {
    expect(login('wrongemail', 'wrongpassword')).toBe(false);

    expect(isLoggedIn()).toBe(false);
    expect(getUser()).toBeNull();
  });

  it('should log in with correct credentials', async () => {
    expect(login(email, password)).toBe(true);

    expect(isLoggedIn()).toBe(true);
    expect(getUser()?.name).toBe(name);
  });

  it('should log out the user', async () => {
    login(email, password);
    expect(isLoggedIn()).toBe(true);

    logout();

    expect(isLoggedIn()).toBe(false);
  });
});
