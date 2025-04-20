# HomeShare - Home Sharing Platform

A modern, responsive web application for listing and booking homes. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- User authentication (login/register)
- Home listing and browsing
- Booking system with date selection
- Responsive design for all devices
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd home-share
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Main application code
  - `context/` - React context providers
  - `data/` - Mock data and types
  - `login/` - Login page
  - `register/` - Registration page
  - `page.tsx` - Home listing page
- `public/` - Static assets

## Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Context API
- Local Storage for authentication

## License

This project is licensed under the MIT License.
