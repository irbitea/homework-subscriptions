# SubHub: Subscription Dashboard

A dashboard for tracking customer subscriptions, renewals and monthly costs.

## Run it

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5173 and log in with the demo user:

| Email                   | Password      |
| ----------------------- | ------------- |
| `ted.mosby@example.com` | `password123` |

## Features

- Summary cards: total, active and expired subscriptions, and total monthly cost
- Sortable subscription table
- Filters by customer and status, applied to both the cards and the table
- Responsive: table on desktop, card list on mobile
- Loading and error states

## Tech stack

React 19, TypeScript, Vite, Ant Design, Tailwind CSS, TanStack Query, React Router.
