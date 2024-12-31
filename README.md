# Shopping Cart Using Clerk Authentication

This project is a simple shopping cart application built with React and Vite. It includes basic functionality for displaying items for sale and handling user interactions.

## Features

- Display a list of items for sale
- Show a popup prompting users to sign in when they attempt to buy an item
- Redirect users to the sign-in page using Clerk for authentication

## Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dependencies

- React
- Vite
- React Router
- Clerk
- ESLint
- Tailwind CSS

## Basics of Using This Repository

To get started with this repository, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using `git clone <repository-url>`.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install all necessary dependencies.
3. **Configure Clerk**: Set up your Clerk application and update the Clerk configuration in your project.
4. **Start the Development Server**: Run `npm run dev` to start the development server. Open your browser and navigate to `http://localhost:3000` to see the application in action.
5. **Explore the Code**: Familiarize yourself with the project structure and codebase. The main components and pages are located in the `src` directory.
6. **Customize and Extend**: Modify the code to fit your needs. Add new features, customize the UI, or integrate additional services as required.

## Authentication

This project uses [Clerk](https://clerk.dev/) for authentication. When a user clicks the "Buy" button, a popup will appear asking them to sign in. After acknowledging the popup, the user will be redirected to the Clerk sign-in page.

### Basics of Clerk Authentication

Clerk provides a complete user management solution, including sign-up, sign-in, and user profile management. Here are some basic steps to integrate Clerk into your application:

1. **Sign Up for Clerk**: Create an account on the [Clerk website](https://clerk.dev/).
2. **Create a Clerk Application**: Set up a new application in the Clerk dashboard.
3. **Install Clerk SDK**: Add Clerk to your project by running `npm install @clerk/clerk-react`.
4. **Initialize Clerk**: Wrap your application with the `ClerkProvider` and configure routes for sign-in and sign-up.
5. **Protect Routes**: Use the `withClerk` higher-order component or `useClerk` hook to protect routes and access user information.

For more detailed instructions, refer to the [Clerk documentation](https://docs.clerk.dev/).

## Routing

The application uses React Router for navigation. Ensure that the sign-in route is properly configured in your router setup.

## Usage

1. **Clone the repository**: `git clone https://github.com/ravi-rautela/React-shop-clerk.git`
2. **Install dependencies**: `npm install`
3. **Start the development server**: `npm run dev`
4. **Open your browser**: Navigate to `http://localhost:3000`

## License

This project is licensed under the MIT License.
