export type User = {
  email: string;
  password?: string;
  name: string;
};

const DEMO_USER: User = {
  email: 'ted.mosby@example.com',
  password: 'password123',
  name: 'Ted Mosby',
};

const STORAGE_TOKEN_KEY = 'token';

export function login(email: string, password: string) {
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    sessionStorage.setItem(STORAGE_TOKEN_KEY, 'demo-token');

    return true;
  }
  return false;
}

export function getToken() {
  return sessionStorage.getItem(STORAGE_TOKEN_KEY);
}

export function isLoggedIn() {
  const hasToken = getToken();

  return hasToken !== null;
}

export function getUser(): User | null {
  if (!isLoggedIn()) return null;

  return { email: DEMO_USER.email, name: DEMO_USER.name };
}

export function logout() {
  sessionStorage.removeItem(STORAGE_TOKEN_KEY);
}
